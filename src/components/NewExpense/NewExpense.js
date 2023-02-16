import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const addExpenseButtonHandler = () => {
        setEditing(false);
    }

    const backButtonHandler = () => {
        setEditing(true);
    }

    const [isEditing, setEditing] = useState(true);


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        backButtonHandler();
    };


    return <div className='new-expense'>
        {isEditing && <button type="submit" onClick={addExpenseButtonHandler}>Add Expense</button>}
        {!isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelHandler={backButtonHandler}/>}
    </div>
};


export default NewExpense;