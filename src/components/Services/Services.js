import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./courseData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <>
            <div className='bg-img d-flex justify-content-center align-items-center'>
                <h1 className='fw-bold text-white text-bg'>Services</h1>
            </div>
            <h3 className='mt-5 mb-5 w-50 text-center border-top-bottom-custom p-5 fw-bold mx-auto'>We Do What We Love To Do. Find the Best Course To Fit Your Needs.</h3>
            <div className="row row-cols-1 row-cols-md-2 g-4 container mx-auto">


                {
                    services.map(service => <div className="col">
                        <div className="card h-100">
                            <img src={service.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{service.course_name}</h5>
                                <p><small>by <span className='fw-bold'>{service.seller_name}</span></small></p>
                                <p className='fw-bold fs-3'>Price: <span className='text-danger'>${service.price}</span></p>
                                <p className="card-text">{service.course_details}</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between align-items-center">
                                <div><button className='btn btn-success fw-bold'>Apply Now</button></div>
                                <div>
                                    <Rating initialRating={service.rating} emptySymbol='fa fa-star-o text-warning' fullSymbol='fa fa-star text-warning' readonly></Rating>
                                    <small className='text-muted'>({service.rating})</small>
                                </div>
                            </div>

                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default Services;