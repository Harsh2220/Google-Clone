import { React, createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialstate, children }) => (

    <StateProvider value={useReducer(reducer,initialstate)}>
        {children}
    </StateProvider>
    
);

export const useStatevalue = () => useContext(StateContext);