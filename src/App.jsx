import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Peanuts from './Peanuts'
import Water from './Water'
import AlmondJoy from './AlmondJoy'
import NavBar from './NavBar'
import VendingMachine from './VendingMachine'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<VendingMachine />} />
          <Route path='/peanuts' element={<Peanuts />} />
          <Route path='/water' element={<Water />} />
          <Route path='/almondjoy' element={<AlmondJoy />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
