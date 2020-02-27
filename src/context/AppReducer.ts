import React, { Reducer } from 'react'

export enum ActionType {
  Add = 'ADD_TRANSACTION',
  Delete = 'DELETE_TRANSACTION'
}
interface IState {
  transactions: {
    id: number;
    text: string;
    amount: number;
  }[];
}

interface IAction {
  type: ActionType;
  payload: any;
}


export const AppReducer: Reducer<IState, IAction> = (state, action) => {
  switch(action.type) {
    case ActionType.Delete:
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    case ActionType.Add:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
    default:
      return state;
  }
}