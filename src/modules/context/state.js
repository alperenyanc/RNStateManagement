// used context apı and hook
import React, {createContext, useContext, useReducer} from 'react';

// created Context for state
export const StateContext = createContext();

// created StateProvider
// props => reducer,  initialState , child.
export const StateProvider = (props) => {
  const {reducer, initialState, children} = props;

  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};
// available state Context for components.
export const useStateValue = () => useContext(StateContext);
