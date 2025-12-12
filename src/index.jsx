// src/index.js  (also paste into src/index.jsx)
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/idcss.css'
import './styles/idcard.css'

// If you have index.css from CRA, you can keep it too (optional)
// import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
