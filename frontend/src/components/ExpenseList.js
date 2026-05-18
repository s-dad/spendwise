import React from 'react';

function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p>No expenses yet.</p>;
  }

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Note</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>${parseFloat(expense.amount).toFixed(2)}</td>
              <td>{expense.note || '-'}</td>
              <td>
                <button onClick={() => onDelete(expense.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;