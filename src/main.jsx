import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HeadComponent } from '/src/components'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeadComponent />
    <App />
  </StrictMode>,
)
