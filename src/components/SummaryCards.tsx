import React, { useMemo } from 'react';
import { ArrowDownRight, ArrowUpRight, Wallet, PieChart } from 'lucide-react';
import { Transaction } from '../types';

interface SummaryCardsProps {
  transactions: Transaction[];
}

export default function SummaryCards({ transactions }: SummaryCardsProps) {
  // useMemo bilan oylik/umumiy harajatlarni hisoblash
  const { totalIncome, totalExpense, balance, topCategory } = useMemo(() => {
    let income = 0;
    let expense = 0;
    const categoryTotals: Record<string, number> = {};

    transactions.forEach((tx) => {
      if (tx.type === 'income') {
        income += tx.amount;
      } else {
        expense += tx.amount;
        categoryTotals[tx.category] = (categoryTotals[tx.category] || 0) + tx.amount;
      }
    });

    const currentBalance = income - expense;

    // Eng ko'p pul sarflangan kategoriyani topish
    let maxCategory = "Yo'q";
    let maxExpense = 0;
    for (const [category, amount] of Object.entries(categoryTotals)) {
      if (amount > maxExpense) {
        maxExpense = amount;
        maxCategory = category;
      }
    }

    return {
      totalIncome: income,
      totalExpense: expense,
      balance: currentBalance,
      topCategory: maxCategory !== "Yo'q" ? `${maxCategory} ($x${maxExpense.toLocaleString()})` : "Yo'q"
      // Removing the complex top category format for a simpler un-formatted maxExpense output to fix regex issue in next step.
    };
  }, [transactions]);

  // Reformatted slightly string outside the useMemo for better readability
  const formattedTopCategory = topCategory === "Yo'q" ? topCategory : topCategory.split(' ($x')[0];

  const cards = [
    {
      title: 'Gross Income',
      value: '+ ' + totalIncome.toLocaleString() + ' UZS',
      status: 'ACTIVE',
      statusColor: 'text-emerald-500 bg-emerald-500/10',
      valueColor: 'text-emerald-500',
    },
    {
      title: 'Total Expenses',
      value: '- ' + totalExpense.toLocaleString() + ' UZS',
      status: 'TRACKED',
      statusColor: 'text-rose-500 bg-rose-500/10',
      valueColor: 'text-rose-500',
    },
    {
      title: 'Net Savings',
      value: balance.toLocaleString() + ' UZS',
      status: 'OPTIMIZED',
      statusColor: 'text-blue-500 bg-blue-500/10',
      valueColor: 'text-white',
    },
    {
      title: 'Top Category',
      value: formattedTopCategory,
      status: 'LARGEST EXPENSE',
      statusColor: 'text-purple-500 bg-purple-500/10',
      valueColor: 'text-white',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        return (
          <div key={index} className="bg-[#161618] border border-[#222224] p-5 rounded-sm">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{card.title}</span>
              <span className={`text-[10px] px-1.5 py-0.5 ${card.statusColor}`}>{card.status}</span>
            </div>
            <div className={`mt-2 text-2xl font-mono tracking-tight ${card.valueColor}`}>{card.value}</div>
          </div>
        );
      })}
    </div>
  );
}
