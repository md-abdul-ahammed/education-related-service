import React from 'react';
import logo from '../images/log0.png'
import Navbar from '../components/Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-dark'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark container">
                <div className="container-fluid">
                    <img src={logo} className='navbar-brand custom-width' alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                        <Navbar></Navbar>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;