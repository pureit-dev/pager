import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { DisplayProvider } from './contexts/display.context'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DisplayProvider>
        <App />
    </DisplayProvider>
  </React.StrictMode>,
)
