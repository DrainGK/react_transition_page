import React from 'react'
import {Link} from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className='nav'>
        <div class="logo">
            <Link className='nav-link' to="/">Guidev</Link>
        </div>
        <div class="nav-links">
            <div class="nav-item">
                <Link className='nav-link' to="/">
                    Home
                </Link>
            </div>
            <div class="nav-item">
                <Link className='nav-link' to="/about">
                    About
                </Link>
            </div>
            <div class="nav-item">
                <Link className='nav-link' to="/Contact">
                    Contact
                </Link>
            </div>
        </div>
    </nav>
  )
}
