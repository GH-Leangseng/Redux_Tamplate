import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import Store from './CreateRedux/Store'
import { Provider } from 'react-redux'
import NewComponent from './NewComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={Store}>
      <App /> 
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <NewComponent/>
      
    </Provider>
  </React.StrictMode>,
)
