import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//imports
import { AuthContextProvider } from './context/AuthContext.jsx'
import { NameContext } from './context/AuthContext.jsx'
import { NameContextProvider } from './context/AuthContext.jsx'

import { NameContextProviderNew } from './context/Example.jsx' //for exmaple

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
