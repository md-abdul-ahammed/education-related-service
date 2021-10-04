import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about-us">About Us</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;