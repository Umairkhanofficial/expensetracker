"use client"
import Image from 'next/image'
import ExpenseForm from './components/expenseform'
import React, { useState } from 'react';
import ExpenseList from './components/expenselist';
export default function Home() {
    
    return (
     <>
      <h1>Expense Tracker</h1>
     <ExpenseList/> 
     {/* <div className=''>
      <div className='py-9 px-9 bg-red-700 rounded-lg border-black-100 w-[20px]'> hello</div>
      
     </div>
       */}
   </>
    )


}
