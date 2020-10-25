import React from 'react';
import Index from './components/Index';
// import StateProvider
import {StateProvider} from './modules/context/state';

const App = () => {
  // first create initialState  obj.
  const initialState = {stateNumber: {number: 0}};

  // added reducer simple using state ,and actions
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increaseNumber':
        return {
          ...state,
          stateNumber: action.increaseNumber,
        };
      // other case
      default:
        return state;
    }
  };
  return (
    // added Provider
    // given initialState and reducer in stateProvider.
    <StateProvider initialState={initialState} reducer={reducer}>
      <Index />
    </StateProvider>
  );
};

export default App;
