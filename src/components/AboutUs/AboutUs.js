import React from 'react';
import './AboutUs.css';

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
            <h3 className='mt-5 mb-5 w-50 text-center border-top-bottom-custom p-5 fw-bold mx-auto'>Lets See What Our Valuable Students Think About Us. Their Testimonials.</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Brabo</h5>
                            <p class="card-text">This is the best opportunity for learning Programming</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 className="card-title">Marselo</h5>
                            <p class="card-text">Its a great to be a part of this community </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Narayan</h5>
                            <p class="card-text">I have learn a lot from this course</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Domingo</h5>
                            <p class="card-text">Its a best course I ever Seen.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;