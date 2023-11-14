import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user:"akshay",
  isFetching: 1,
  error: false,
};



export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        user: INITIAL_STATE.user,
        isFetching: INITIAL_STATE.isFetching,
        error: INITIAL_STATE.error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


//------
//import { createContext } from "react";
export const NameContext = createContext()
export const NameContextProvider = ({children})=>{
  return(
    <NameContext.Provider
    value={{
      name:"akshay",
      age:10
    }}>
      {children}
    </NameContext.Provider>
  )
}

