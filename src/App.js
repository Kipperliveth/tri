import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
  <BrowserRouter>
     <Navbar />
     <Routes>
          <Route />
      </Routes>  
    </BrowserRouter>
    </div>
  )
}

export default App