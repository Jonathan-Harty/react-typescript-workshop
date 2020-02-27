import React, { FunctionComponent, useState, useContext } from 'react'
import { GlobalContext } from './GlobalState';

export const AddTransaction: FunctionComponent = () => {
  const [text, setText] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."/>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br/>
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={(e) => setAmount(+e.target.value)} placeholder="Enter amount..."/>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  )
}
