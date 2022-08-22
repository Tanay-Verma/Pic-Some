import React,{useContext} from 'react'
import {Link} from "react-router-dom"
import { Context } from '../Context'

export default function Header() {
  const {cartItems} = useContext(Context)
  return (
    <header>
      <Link to="/" style={{textDecoration:"none"}}><h2>Pic Some</h2></Link>
      <Link to="cart" style={{textDecoration:"none"}}><i className={cartItems.length?"ri-shopping-cart-fill ri-fw ri-2x":"ri-shopping-cart-line ri-fw ri-2x"}></i></Link>
    </header>
  )
}
