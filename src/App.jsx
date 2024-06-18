import React from 'react'
import { Routes,Route } from 'react-router-dom'
import NavbarTop from './components/NavbarTop'
import './components/NavbarTop.css'
import './App.css'
import NavbarBottom from './components/NavbarBottom';
import Clothing from './pages/Clothing'
import Shoes from './pages/Shoes'
import Handbags from './pages/Handbags'
import Designers from './pages/Designers'
import Sunglasses from './pages/Sunglasses'
import Accessories from './pages/Accessories'
import JewelryWatches from './pages/JewelryWatches'
import Home from './pages/Home'
import Under50 from './pages/Under50'
import Clearance from './pages/Clearance'
import ProductList from './components/ProductList'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='App'>
       <NavbarTop/>
       <NavbarBottom/>
       <Routes>
         <Route path='/Clothing' element={<Clothing/>}/>
         <Route path='/Shoes' element={<Shoes/>}/>
         <Route path='/Handbags' element={<Handbags/>}/>
         <Route path='/Designers' element={<Designers/>}/>
         <Route path='/Sunglasses' element={<Sunglasses/>}/>
         <Route path='/JewelryWatches' element={<JewelryWatches/>}/>
         <Route path='/Accessories' element={<Accessories/>}/>
         <Route path='/' element={<Home/>} />
         <Route path='/Under50' element={<Under50/>}/>
         <Route path='/Clearance' element={<Clearance/>}/>
       </Routes>
       <ProductList/>
       <Footer/>
    </div>
  )
}

export default App;