// npm
import React, { createContext } from 'react';

const Context = createContext();

export default Context;

export const ContextProvider = (props) => {
  return <Context.Provider value={{}}>{props.children}</Context.Provider>;
};
