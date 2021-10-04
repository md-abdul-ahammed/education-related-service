import React from 'react';

const AboutUs = () => {
    return (
        <>
            <div className='bg-img d-flex justify-content-center align-items-center'>
                <h1 className='fw-bold text-white text-bg'>About Us</h1>
            </div>
            <div className="card mb-3 container mt-5 p-5 max-width">
                <div className="row g-0 align-items-center">
                    <div className="col-md-4">
                        <img src={"http://www.thetahmid.com/themes/edulyn-v1.0/assets/images/about-1.jpg"} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">We Have Experienced Professionals & We Do Our Best To Achieve Your Goal. Your Happiness Is Our First Priority.</h5>
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis error ut provident vel repellendus nihil atque possimus aliquam, mollitia tempora neque voluptate debitis illum veniam.Numquam blanditiis dignissimos laboriosam illum ut officia.
                                Nam aperiam autem nesciunt perferendis id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas nulla sequi pariatur quam animi ipsum molestias assumenda cumque.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;