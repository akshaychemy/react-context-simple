import { createContext } from "react";


export const NameContextNew = createContext()


export const NameContextProviderNew =({children})=>{
    return(
        <NameContextNew.Provider
        value={{
            address:"home1",
            past:"apst1"
        }}>
            {children}
        </NameContextNew.Provider>
    )
}