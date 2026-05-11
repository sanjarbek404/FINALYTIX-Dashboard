import React, { useState } from 'react';
import { Transaction, EXPENSE_CATEGORIES, INCOME_CATEGORIES } from '../types';
import { PlusCircle } from 'lucide-react';

interface TransactionFormProps {
  onAdd: (transaction: Omit<Transaction, 'id'>) => void;
}

export default function TransactionForm({ onAdd }: TransactionFormProps) {
  const [type, setType] = useState<'income' | 'expense'>('expense');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(EXPENSE_CATEGORIES[0]);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || isNaN(Number(amount))) return;

    onAdd({
      type,
      amount: Number(amount),
      category,
      date,
      note,
    });

    setAmount('');
    setNote('');
  };

  const handleTypeChange = (newType: 'income' | 'expense') => {
    setType(newType);
    setCategory(newType === 'income' ? INCOME_CATEGORIES[0] : EXPENSE_CATEGORIES[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#161618] border border-[#222224] p-5 rounded-sm flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
          New Transaction
        </h3>
        
        <div className="grid grid-cols-1 gap-5">
          {/* Type Toggle */}
          <div className="flex bg-[#0A0A0B] rounded-sm p-1 border border-[#222224]">
            <button
              type="button"
              className={`flex-1 py-1.5 text-[10px] uppercase font-bold tracking-widest transition-colors ${
                type === 'expense' ? 'bg-[#222224] text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
              onClick={() => handleTypeChange('expense')}
            >
              Expense
            </button>
            <button
              type="button"
              className={`flex-1 py-1.5 text-[10px] uppercase font-bold tracking-widest transition-colors ${
                type === 'income' ? 'bg-[#222224] text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
              onClick={() => handleTypeChange('income')}
            >
              Income
            </button>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Amount (UZS)</label>
            <input
              type="number"
              required
              min="0"
              step="1000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 bg-[#0A0A0B] border border-[#222224] rounded-sm text-white font-mono focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-gray-600"
              placeholder="0"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 bg-[#0A0A0B] border border-[#222224] rounded-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
            >
              {(type === 'income' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Date</label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 bg-[#0A0A0B] border border-[#222224] rounded-sm text-white font-mono focus:outline-none focus:border-emerald-500 transition-colors [color-scheme:dark]"
              />
            </div>

            {/* Note */}
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Note</label>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full px-3 py-2 bg-[#0A0A0B] border border-[#222224] rounded-sm text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-gray-600"
                placeholder="Optional"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full py-2 bg-[#222224] hover:bg-white hover:text-black border border-[#333] text-[10px] text-gray-300 uppercase font-bold tracking-widest transition-colors rounded-sm"
      >
        Record Transaction
      </button>
    </form>
  );
}
