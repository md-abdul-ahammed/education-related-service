import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./courseData.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)))
    }, [])
    return (
        <>
            {/* slider component */}
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={'https://www.aajkikhabar.com/en/wp-content/uploads/2019/02/B.Ed-course-1.jpg'} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h6 className='bg-warning text-uppercase p-3 rounded d-inline-block fw-bold'>WellCome To Our Home Education</h6>
                            <br />
                            <h3 className='bg-success p-3 rounded d-inline-block fw-bold'>Best School In This Region Join Us Today.</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={'http://www.bethesda-education.org/img/slider/2.jpg'} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h6 className='bg-warning text-uppercase p-3 rounded d-inline-block fw-bold'>WellCome To Our Home Education</h6>
                            <br />
                            <h3 className='bg-success p-3 rounded d-inline-block fw-bold'>Best School In This Region Join Us Today.</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={'https://themes.pixelstrap.com/reno/theme/assets/images/education/slider/1.jpg'} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h6 className='bg-warning text-uppercase p-3 rounded d-inline-block fw-bold'>WellCome To Our Home Education</h6>
                            <br />
                            <h3 className='bg-success p-3 rounded d-inline-block fw-bold'>Best School In This Region Join Us Today</h3>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="card mb-3 container mt-5 p-5 max-width">
                <div className="row g-0 align-items-center">
                    <div className="col-md-4">
                        <img src={"http://www.thetahmid.com/themes/edulyn-v1.0/assets/images/about-1.jpg"} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">We Have Experienced Professionals & We Do Our Best To Achieve Your Goal. Your Happiness Is Our First Priority.</h5>
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis error ut provident vel repellendus nihil atque possimus aliquam, mollitia tempora neque voluptate debitis illum veniam.Numquam blanditiis dignissimos laboriosam illum ut officia.
                                Nam aperiam autem nesciunt perferendis id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas nulla sequi pariatur quam animi ipsum molestias assumenda cumque.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* services area */}
            <div className='container mx-auto'>
                <h3 className='mt-5 mb-5 w-50 text-center mx-auto'>We Do What We Love To Do. Find the Best Course To Fit Your Needs.</h3>
                <div className="row row-cols-1 row-cols-md-3 g-4 ">

                    {
                        services.map(service => <div key={service.id} className="col">
                            <div className="card h-100">
                                <img src={service.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{service.course_name}</h5>
                                    <p><small>by {service.seller_name}</small></p>
                                    <p className='fw-bold fs-3'>Price: <span className='text-danger'>${service.price}</span></p>
                                    <p className="card-text">{service.course_details}</p>
                                </div>
                                <div className="card-footer d-flex justify-content-between align-items-center">
                                    <div>
                                        <Link to='/services'><button className='btn btn-outline-success fw-bold'>Details</button></Link>
                                    </div>
                                    <div>
                                        <Rating initialRating={service.rating} emptySymbol='fa fa-star-o text-warning' fullSymbol='fa fa-star text-warning' readonly></Rating>
                                        <small className='text-muted'>({service.rating})</small>
                                    </div>
                                </div>

                            </div>
                        </div>)
                    }
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <Link to='/services'><button className='btn btn-success px-5 py-2 fw-bold'>View All Courses</button></Link>
                </div>
            </div>
        </>

    );
};

export default Home;