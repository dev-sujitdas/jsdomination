import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import ModuleDetails from './modulePage/ModuleDetails'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path="/module/:name" element={<ModuleDetails/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App