import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAdd = (expense) => {
    setExpenses([{ ...expense, id: uuidv4() }, ...expenses]);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

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

