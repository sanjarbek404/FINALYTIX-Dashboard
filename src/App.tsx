import React from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Transaction } from './types';
import SummaryCards from './components/SummaryCards';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import AnalyticsChart from './components/AnalyticsChart';
import { LayoutDashboard } from 'lucide-react';

export default function App() {
  const [transactions, setTransactions] = useLocalStorage<Transaction[]>('moliya-transactions', []);

  const handleAddTransaction = (newTx: Omit<Transaction, 'id'>) => {
    const transaction: Transaction = {
      ...newTx,
      id: crypto.randomUUID(), // Create unique ID
    };
    setTransactions(prev => [...prev, transaction]);
  };

  const handleDeleteTransaction = (id: string) => {
    setTransactions(prev => prev.filter(tx => tx.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E0E0E0] font-sans flex flex-col">
      {/* Header */}
      <header className="bg-[#0A0A0B] border-b border-[#222224] sticky top-0 z-10">
        <div className="max-w-[1280px] w-full mx-auto p-6">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-emerald-500 rounded-sm rotate-45"></div>
            <h1 className="text-sm font-bold text-white uppercase tracking-widest">
              FINALYTIX
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1280px] w-full mx-auto p-6 py-8 flex-1 flex flex-col space-y-6">
        <SummaryCards transactions={transactions} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1">
          {/* Left Column - Form */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <TransactionForm onAdd={handleAddTransaction} />
          </div>

          {/* Middle Column - Chart */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="flex-1">
              <AnalyticsChart transactions={transactions} />
            </div>
          </div>

          {/* Right Column - Transaction List */}
          <div className="lg:col-span-2">
            <TransactionList 
              transactions={transactions} 
              onDelete={handleDeleteTransaction} 
            />
          </div>
        </div>
      </main>
    </div>
  );
}
