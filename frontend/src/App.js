import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import Dashboard from './components/Dashboard';
import { getExpenses, addExpense, deleteExpense } from './api';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const data = await getExpenses();
      setExpenses(data);
    } catch (err) {
      console.error('Failed to fetch expenses:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (expense) => {
    try {
      const newExpense = await addExpense(expense);
      setExpenses([newExpense, ...expenses]);
    } catch (err) {
      console.error('Failed to add expense:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteExpense(id);
      setExpenses(expenses.filter((e) => e.id !== id));
    } catch (err) {
      console.error('Failed to delete expense:', err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      <h1>Spendwise</h1>
      <Dashboard expenses={expenses} />
      <AddExpense onAdd={handleAdd} />
      <ExpenseList expenses={expenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;