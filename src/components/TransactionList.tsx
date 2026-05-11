import React, { useState, useMemo } from 'react';
import { Transaction } from '../types';
import { ArrowDownRight, ArrowUpRight, Trash2, Filter } from 'lucide-react';

interface TransactionListProps {
  transactions: Transaction[];
  onDelete: (id: string) => void;
}

export default function TransactionList({ transactions, onDelete }: TransactionListProps) {
  const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');

  const filteredTransactions = useMemo(() => {
    let result = transactions;
    if (filter !== 'all') {
      result = transactions.filter(t => t.type === filter);
    }
    // Sana bo'yicha eng yangilari birinchi turishi uchun sort qilamiz
    return [...result].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [transactions, filter]);

  return (
    <div className="bg-[#161618] border border-[#222224] p-5 flex flex-col h-full rounded-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5 border-b border-[#222224] pb-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Recent Transactions</h3>
        
        <div className="flex gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as 'all' | 'income' | 'expense')}
            className="text-[10px] px-2 py-1 border border-[#333] cursor-pointer bg-[#0A0A0B] text-gray-400 uppercase outline-none"
          >
            <option value="all">Filter: ALL</option>
            <option value="income">Filter: INCOME</option>
            <option value="expense">Filter: EXPENSE</option>
          </select>
        </div>
      </div>

      <div className="flex-1 overflow-auto pr-2">
        {filteredTransactions.length === 0 ? (
          <div className="h-40 flex items-center justify-center text-gray-500 text-xs uppercase tracking-widest">
            No transactions found.
          </div>
        ) : (
          <div className="flex flex-col">
            {filteredTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between py-3 border-b border-[#222224]/50 hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-3 px-2">
                  <div className={`p-1.5 rounded-sm ${
                    tx.type === 'income' 
                      ? 'bg-emerald-500/10 text-emerald-500' 
                      : 'bg-rose-500/10 text-rose-500'
                  }`}>
                    {tx.type === 'income' ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                  </div>
                  <div>
                    <p className="font-medium text-xs text-white uppercase tracking-widest">{tx.category}</p>
                    <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono mt-0.5">
                      <span>{tx.date.replace(/-/g, '.')}</span>
                      {tx.note && (
                        <>
                          <span className="w-0.5 h-0.5 bg-gray-500 rounded-full"></span>
                          <span className="truncate max-w-[150px]">{tx.note}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 px-2">
                  <span className={`text-xs font-mono font-medium ${
                    tx.type === 'income' ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {tx.type === 'income' ? '+' : '-'}${tx.amount.toLocaleString()} UZS
                  </span>
                  <button
                    onClick={() => onDelete(tx.id)}
                    className="p-1.5 text-gray-500 hover:text-rose-400 hover:bg-rose-400/10 rounded-sm transition-colors opacity-0 group-hover:opacity-100"
                    title="Delete"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
