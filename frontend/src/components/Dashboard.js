import React from 'react';

function Dashboard({ expenses }) {
 const total = expenses.reduce((sum, e) => sum + parseFloat(e.amount), 0);

  const byCategory = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + parseFloat(e.amount);
    return acc;
  }, {});

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Total Spent: <strong>${total.toFixed(2)}</strong></p>
      <h3>By Category</h3>
      <ul>
        {Object.entries(byCategory).map(([cat, amount]) => (
          <li key={cat}>{cat}: ${amount.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;