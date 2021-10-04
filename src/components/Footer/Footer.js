import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/log0.png'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='bg-dark pt-5 mt-5'>
                <div className='row container text-white mx-auto'>
                    <div className="col-md-5">
                        <img src={Logo} className='w-50' alt="" />
                        <p>Stay with us. Learn something new day by day</p>
                        <div className='mt-3'>
                            <p><small><i className="fas fa-location-arrow me-2 text-warning"></i> Hathazari College Gate, 23/4 road, Chattagram</small></p>
                            <p><small><i className="fas fa-envelope me-2 text-warning"></i> homeeducation@gamil.com</small></p>
                            <p><small><i className="fas fa-phone me-2 text-warning"></i> Hathazari College Gate, 23/4 road, Chattagram</small></p>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3>USEFUL LINKS</h3>
                        <NavLink className="nav-link text-warning" aria-current="page" to="/home"><i className="fas fa-arrow-right"></i> Home</NavLink>
                        <NavLink className="nav-link text-warning" to="/services"><i className="fas fa-arrow-right"></i> Services</NavLink>
                        <NavLink className="nav-link text-warning" to="/about-us"><i className="fas fa-arrow-right"></i> About Us</NavLink>
                        <NavLink className="nav-link text-warning" to="/contact-us"><i className="fas fa-arrow-right"></i> Contact Us</NavLink>
                    </div>
                    <div className="col-md-4">
                        <h3>NEWSLETTER</h3>
                        <p>Lorem ipsum dolor sit amet, consectet adipisicing elit.</p>
                        <input type="text" className="form-control me-4" placeholder="Enter Email Here" />
                    </div>
                </div>
            </div>
            {/* copyright area start from here */}
            <div className='text-white text-center copyright p-2'>
                <p className='m-0'><small>Copyright <i className="far fa-copyright"></i> 2021  | Designed With <i className="fas fa-heart text-danger"></i> by <span className='text-warning fw-bold'>HomeEducation</span></small></p>
            </div>
        </>
    );
};

export default Footer;