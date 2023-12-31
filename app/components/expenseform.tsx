// components/ExpenseForm.js
"use client"
import React, { useState } from 'react';

const ExpenseForm = ({isOpen,onClose,onAddExpense}) => {
    if (!isOpen) {
        return null;
      }
    //const[expId,setExpId]=useState<number>(0);
    const[date,setDate]=useState<string>("");
    const[category,setCat]=useState<string>("");
    const[note,setNote]=useState<string>("");
    const[amount,setAmount] = useState<number>(0);


    const onAddHandler= ()=>{
        const newExpense:ExpenseType={
          id:`${Date.now()}`,
          amount:amount,
          category,
          note,
          date,
        };
        onAddExpense(newExpense)
    }
  return (
    <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Expense Tracker</h2>
      
      <form action="#" method="post">
        {/* ID Field
        <div className="mb-4">
          <label htmlFor="expenseId" className="block text-gray-700 text-sm font-bold mb-2">Expense ID</label>
          <input type="text" onChange={(e)=>{setExpId(e.target.value)}} id="expenseId" name="expenseId" className="w-full p-2 border border-gray-300 rounded" />
        </div> */}

        {/* Date Field */}
        <div className="mb-4">
          <label htmlFor="expenseDate" className="block text-gray-700 text-sm font-bold mb-2">Expense Date</label>
          <input type="date" onChange={(e)=>{setDate(e.target.value)}} id="expenseDate" name="expenseDate" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        {/* Category Field */}
        <div className="mb-4">
          <label htmlFor="expenseCategory" className="block text-gray-700 text-sm font-bold mb-2">Expense Category</label>
          <select onChange={(e)=>{setCat(e.target.value)}} id="expenseCategory" name="expenseCategory" className="w-full p-2 border border-gray-300 rounded">
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
            <option value="housing">Housing</option>
            {/* Add more categories as needed */}
          </select>
        </div>

        {/* Note Field */}
        <div className="mb-4">
          <label htmlFor="expenseNote" className="block text-gray-700 text-sm font-bold mb-2">Expense Note</label>
          <textarea onChange={(e)=>{setNote(e.target.value)}} id="expenseNote" name="expenseNote" className="w-full p-2 border border-gray-300 rounded"></textarea>
        </div>

        {/* Amount Field */}
        <div className="mb-4">
          <label htmlFor="expenseAmount" className="block text-gray-700 text-sm font-bold mb-2">Expense Amount</label>
          <input onChange={(e)=>setAmount(parseFloat(e.target.value))} type="number" id="expenseAmount" name="expenseAmount" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <button onClick={onAddHandler} type="button" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
