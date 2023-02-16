import Card from "../UI/Card";
import React, { useState } from "react";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2023');

    const getSelectedDate = (selectedDate) => {
        setSelectedYear(selectedDate)
    };

    const filteredExpenses = props.expenseList.filter(expense => {
        return expense.date.getFullYear() === parseInt(selectedYear);
    });


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedDate={selectedYear} onSaveSelectedDate={getSelectedDate} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}
export default Expenses;
