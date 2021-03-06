import React, { FunctionComponent, useContext } from 'react'
import { GlobalContext } from './GlobalState'

export const Balance: FunctionComponent = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>
        Your Balance
      </h4>
      <h1>
        ${total}
      </h1>
    </>
  )
}
