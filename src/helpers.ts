type Props = {
  key: string;
};

type budgetProps = {
  name: string;
  amount: number;
};

type expenseProps = {
  name: string;
  amount: number;
  budgetId: string;
};

export const wait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 2000));

// colors
const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
};

// Local storage
export const fetchData = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};

// create budget
export const createBudget = ({ name, amount }: budgetProps) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};

// create expense
export const createExpense = ({ name, amount, budgetId }: expenseProps) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };
  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newItem])
  );
};

// delete item
export const deleteItem = ({ key }: Props) => {
  return localStorage.removeItem(key);
};
