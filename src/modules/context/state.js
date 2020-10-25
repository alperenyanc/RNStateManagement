// using  context apı with hook
import React, {createContext, useContext, useReducer} from 'react';

// create StateContext for state
export const StateContext = createContext();

// create StateProvider 
export const StateProvider = (props) => {
  const {reducer, initialState, children} = props;

  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};
// initialize and export StateContext for  any components.
export const useStateValue = () => useContext(StateContext);
