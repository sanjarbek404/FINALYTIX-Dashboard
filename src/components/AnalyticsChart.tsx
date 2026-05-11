import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Transaction } from '../types';

interface AnalyticsChartProps {
  transactions: Transaction[];
}

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#64748b'];

export default function AnalyticsChart({ transactions }: AnalyticsChartProps) {
  // Logic: faqat xarajatlarni tahlil qilamiz
  const data = useMemo(() => {
    const expenseTotals: Record<string, number> = {};

    transactions.forEach((tx) => {
      if (tx.type === 'expense') {
        expenseTotals[tx.category] = (expenseTotals[tx.category] || 0) + tx.amount;
      }
    });

    return Object.entries(expenseTotals)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value); // Eng ko'p xarajat yuqoriga
  }, [transactions]);

  return (
    <div className="bg-[#161618] border border-[#222224] p-5 w-full h-full min-h-[350px] flex flex-col rounded-sm">
      <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Spending Analysis</h3>
      
      {data.length === 0 ? (
        <div className="flex-1 flex items-center justify-center text-gray-500 text-xs uppercase tracking-widest">
          Insufficient data
        </div>
      ) : (
        <div className="flex-1 w-full relative min-h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={85}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => [`${value.toLocaleString()} UZS`, 'Amount']}
                contentStyle={{ borderRadius: '2px', border: '1px solid #222224', backgroundColor: '#161618', color: '#E0E0E0', fontSize: '10px', fontFamily: 'monospace', textTransform: 'uppercase' }}
                itemStyle={{ color: '#E0E0E0' }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconType="circle"
                wrapperStyle={{ paddingTop: '20px', fontSize: '10px', textTransform: 'uppercase', color: '#9ca3af' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
