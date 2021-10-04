import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <>
            <div className='bg-img d-flex justify-content-center align-items-center'>
                <h1 className='fw-bold text-white text-bg'>Contact Us</h1>
            </div>
            <div className='row container mx-auto my-5'>
                <div className='col-4'>
                    <h3 className='mb-5 bottom-border-custom d-inline-block'>Contact Info</h3>
                    <div className='d-flex align-items-center '>
                        <i className="fas border rounded-circle p-3 fa-location-arrow mb-2 me-3 text-success fs-1"></i>
                        <div>
                            <h4>Our Location</h4>
                            <p className='text-muted'> Hathazari College Gate, 23/4 road, Chattagram</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center mb-3'>
                        <i className="fas border rounded-circle p-3 fa-envelope me-3 text-success fs-1"></i>
                        <div>
                            <h4>Email Address</h4>
                            <p className='text-muted'>homeeducation@gamil.com</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <i className="fas border rounded-circle p-3 fa-phone me-3 text-success fs-1"></i>
                        <div>
                            <h4>Phone Number</h4>
                            <p className='text-muted'>+1 (396) 486 4709</p>
                        </div>
                    </div>

                </div>
                <form className='col-8 ps-5'>
                    <h3 className='mb-5 bottom-border-custom d-inline-block'>Get In Touch</h3>
                    <div>
                        <div className='d-flex'>
                            <input type="text" className="form-control me-4" placeholder="Full Name" />
                            <input type="email" className="form-control" placeholder="Email Address" />
                        </div>
                        <input type="text" className="form-control mt-4" placeholder="Subject" />

                        <textarea className='w-100 form-control mt-4' placeholder="Enter Message" cols="30" rows="5"></textarea>
                        <button className='btn btn-success w-100 mt-4 fw-bold'>Send Message</button>

                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactUs;