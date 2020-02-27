import React, { FunctionComponent, useContext } from 'react'
import { GlobalContext } from './GlobalState';

interface TransactionProps {
  id: number;
  text: string;
  amount: number;
}

export const Transaction: FunctionComponent<TransactionProps> = ({ id, text, amount }) => {
  const sign = amount < 0 ? '-' : '+';
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {text} <span> {sign}${Math.abs(amount)}</span>
      <button onClick={() => deleteTransaction(id)} className="delete-btn">x</button>
    </li>
  )
}
