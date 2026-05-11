export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  category: string;
  date: string;
  note: string;
}

export const EXPENSE_CATEGORIES = [
  "Oziq-ovqat",
  "Transport",
  "Uy-joy",
  "Aloqa & Internet",
  "Ko'ngilochar",
  "Sog'liqni saqlash",
  "Kiyim-kechak",
  "Boshqa"
];

export const INCOME_CATEGORIES = [
  'Oylik maosh',
  'Biznes',
  'Bonus',
  'Foyda',
  'Boshqa'
];
