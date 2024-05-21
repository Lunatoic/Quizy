import React from 'react'
import "../styles/App.css"
import {Route, Routes } from 'react-router-dom'
import Home from './home'

const App = () => {

  return (
    <>
    <Routes>

      <Route path='/' element={<Home />}  />
      <Route path='/quiz' element={"quiz component"}  />
      <Route path='/result' element={"result component"}  />
    </Routes>
    </>
  )
}

export default App
