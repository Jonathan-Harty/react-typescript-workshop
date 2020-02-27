import React, { createContext, useReducer, ReactNode } from 'react'
import { AppReducer } from '../context/AppReducer';
import { ActionType } from '../context/AppReducer';

interface transaction {
  id: number;
  text: string;
  amount: number;
}

interface state {
  transactions: transaction[];
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: transaction) => void;
}

const initialState: state = {
  transactions: [],
  deleteTransaction: (id) => null,
  addTransaction: (transaction) => null
}

export const GlobalContext = createContext(initialState);

interface GPProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GPProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id: any) => {
    dispatch({
      type: ActionType.Delete,
      payload: id
    });
  }

  const addTransaction = (transaction: any) => {
    dispatch({
      type: ActionType.Add,
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
    )
}
