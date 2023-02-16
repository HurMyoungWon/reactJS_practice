import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Car Insurance1', amount: 294.67, date: new Date(2023, 1, 28) },
  { id: 'e3', title: 'Car Insurance2', amount: 295.67, date: new Date(2021, 3, 28) },
  { id: 'e4', title: 'Car Insurance3', amount: 296.67, date: new Date(2020, 4, 28) },
  { id: 'e5', title: 'Car Insurance3', amount: 297.67, date: new Date(2019, 5, 28) }
];


const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenseList={expenses} />
    </div>
  );
}

export default App;
