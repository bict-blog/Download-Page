import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from "./components/Navbar"
import Desktop from "./components/Desktop"

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
      <Navbar />
     <Desktop />
	</React.StrictMode>
)