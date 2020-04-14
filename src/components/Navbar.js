import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            l0l
        </div>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
               <NavLink
               className='nav-link'
               to="/"
               exact>
                   Main
               </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className='nav-link'
                    to="/about">
                    Information
                </NavLink>
            </li>
        </ul>
    </nav>
)

