

import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense=(props)=>{

    let saveExpenseDataHandler=(enteredExpenseData)=>{
        let enteredExpenseData1 ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(enteredExpenseData1);
        // console.log(enteredExpenseData1);

    };
    return(
        <div class="new-expense">
            <ExpenseForm saveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}
export default NewExpense;