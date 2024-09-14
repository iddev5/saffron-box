import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import Cart from './pages/Cart';
import Delivery from './pages/Delivery';

function App() {
  return (
    <>
      <Routes>
        <Route eact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
