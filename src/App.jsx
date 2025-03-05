import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom'
import Peanuts from './Peanuts'
import Water from './Water'
import AlmondJoy from './AlmondJoy'
import NavBar from './NavBar'
import VendingMachine from './VendingMachine'

function App() {
  const location = useLocation();

  return (
    <>
        <NavBar />
        <Routes>
          <Route path='/' element={<VendingMachine />} />
          <Route path='/peanuts' element={<Peanuts />} />
          <Route path='/water' element={<Water />} />
          <Route path='/almondjoy' element={<AlmondJoy />} />
        </Routes>
        {location.pathname === '/' && (
          <div className="links-container">
            <Link to="/peanuts" className="link">PEANUTS</Link>
            <Link to="/water" className="link">WATER</Link>
            <Link to="/almondjoy" className="link">ALMOND JOY</Link>
          </div>
        )}
    </>
  )
}

export default function Wrapper() {
  return (
    <BrowserRouter>
      <App /> {/* Wrap App with BrowserRouter */}
    </BrowserRouter>
  );
}
