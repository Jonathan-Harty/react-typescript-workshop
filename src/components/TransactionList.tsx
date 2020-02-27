import React, { FunctionComponent, useContext } from 'react'
import { GlobalContext } from './GlobalState'
import { Transaction } from './Transaction';

export const TransactionList: FunctionComponent = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {
          transactions.map((transaction) => (
            <Transaction key={transaction.id} id={transaction.id} text={transaction.text} amount={transaction.amount}/>
          ))
        }
      </ul>
    </>
  )
}
