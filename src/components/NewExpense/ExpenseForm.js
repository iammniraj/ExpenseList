

import React,{useState} from "react";
import './ExpenseForm.css';

const ExpenseForm=(props)=>{

    const[enteredTitle ,setEnteredTitle]=useState('');
    const[enteredAmount ,setEnteredAmount]=useState('');
    const[enteredDate ,setEnteredDate]=useState('');

    let titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);

    }
    let amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);

    }
    let dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);

    }

    const formSubmitHandler=(event)=>{
        event.preventDefault();
        let expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:enteredDate
        }
        props.saveExpenseData(expenseData);
        // console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');


    }
    return(
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <lable className="labelAll">Title</lable>
                    <input type="text" value={enteredTitle} onChange={ titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <lable className="labelAll">Amount</lable>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={ amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <lable className="labelAll">Date</lable>
                    <input type="date" value={enteredDate} onChange={ dateChangeHandler}/ >
                </div>
                
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
        
    );
}
export default ExpenseForm;