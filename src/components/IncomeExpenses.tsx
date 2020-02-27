import React, { FunctionComponent, useContext } from 'react'
import { GlobalContext } from './GlobalState'

export const IncomeExpenses: FunctionComponent = () => {
  const { transactions } = useContext(GlobalContext);

  let income = 0;
  let expense = 0;

  transactions.map(({amount}) => {amount < 0 ? expense += amount : income += amount });



  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus"> {expense.toFixed(2)}</p>
      </div>
    </div>
  )
}
