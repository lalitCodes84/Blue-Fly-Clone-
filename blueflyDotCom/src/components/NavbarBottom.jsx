import React from 'react'
import { Link } from 'react-router-dom'
import '../components/NavbarBottom.css'

// CLOTHING
//  SHOES
//  HANDBAGS
//  DESIGNERS
//  SUNGLASSES
//  JEWELRY & WATCHES
//  ACCESSORIES
//  HOME
//  UNDER $50
//  CLEARANCE

function NavbarBottom() {

  let styles ={
    textDecoration:"none",
    color:'black'
  }

  return (
    <nav>
      <li><Link style={styles} to="/clothing">CLOTHING</Link></li>
      <li><Link style={styles} to="/shoes">SHOES</Link></li>
      <li><Link style={styles} to="/handbags">HANDBAGS</Link></li>
      <li><Link style={styles} to="/designers">DESIGNERS</Link></li>
      <li><Link style={styles} to="/sunglasses">SUNGLASSES</Link></li>
      <li> <Link style={styles} to="/jewelryWatches">JEWELRY & WATCHES</Link></li>
      <li><Link style={styles} to="/accessories">ACCESSORIES</Link></li>
      <li><Link style={styles} to="/">HOME</Link></li>
      <li><Link style={styles} to="/under50">UNDER $50</Link></li>
      <li><Link style={styles} to="/clearance">CLEARANCE</Link></li>
  </nav>
  )
}

export default NavbarBottom