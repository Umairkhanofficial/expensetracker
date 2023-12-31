"use client"
import Image from 'next/image'
import ExpenseForm from './expenseform'
import React, { useState } from 'react';
export default function ExpenseList() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [expenses,setExpenses] = useState<ExpenseType[]>([]);
    const [expense,setExpense] = useState<ExpenseType>({
      id:'',
      date:'',
      category:"",
      note:'',
      amount:0,
    
    })
    const onAddExpense  = (expense:ExpenseType) =>{
      setExpenses([...expenses,expense])
    }
   console.log(expenses)
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
     <>
     <div className="bg-gray-100 p-8">
        <button onClick={openModal} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Open Expense App
        </button>
        <br></br>
        <button onClick={closeModal} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Close App
        </button>
  
        <ExpenseForm  expense={expense} onAddExpense={onAddExpense} isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <div>
        
      </div>
      </>
    )

}
