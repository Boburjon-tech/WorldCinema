import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DarkModeProvider } from './context/darkModeContext.jsx';

createRoot(document.getElementById('root')).render(
  <DarkModeProvider>
    <StrictMode>
    <App />
  </StrictMode>
  </DarkModeProvider>
)
