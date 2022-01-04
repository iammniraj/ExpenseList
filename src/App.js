

import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense.js'

    let dumyExpenses= [
        {
            id : 'e1',
            title:'School fee',
            amount: 300,
            date : new Date(2021,3,14)
        },
        {
            id: 'e1',
            title:'Electronics',
            amount: 600,
            date : new Date(2021,4,16)
        },
        {
            id: 'e1',
            title:'Car-insurance',
            amount: 100,
            date : new Date(2021,4,28)
        },
        {
            id: 'e1',
            title:'Food',
            amount: 200,
            date : new Date(2021,5,3)
        }
    ];
const App=() =>{
     const [expenses, setExpense]= useState(dumyExpenses);
    const addExpenseHandler=(expense)=>{
             const updatedExpense=[expense, ...expenses];
             setExpense(updatedExpense);
            //  console.log(expense);   
         };
    return(
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses item={ expenses }/>
        </div>   
    );   
}
export default App;