import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from "./components/Navbar"
import Mobile from "./components/Mobile"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Mobile />
  </React.StrictMode>
)