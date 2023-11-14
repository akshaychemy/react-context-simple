# Context in React js

this is the repo showing example of context in react js

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

//==================================

const { address} = useContext(NameContextNew)

//=================================


import { NameContextProviderNew } from './context/Example.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <NameContextProvider>
        <NameContextProviderNew>
          <App />
      </NameContextProviderNew>
      </NameContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
