import React from 'react'
import {Link} from "react-router-dom"


export default function Header() {
  return (
    <header>
      <Link to="/" style={{textDecoration:"none"}}><h2>Pic Some</h2></Link>
      <Link to="cart" style={{textDecoration:"none"}}><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link>
    </header>
  )
}
