import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1 className='logo'>Product-X</h1>
        <div className='links'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/pricing'>Pricing</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>
    </header>
  )
}

export default Header