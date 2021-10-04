import React from 'react';
import notFoundImg from '../../images/304-3045322_robo-404-page-404-error-page-gif.gif'

const NotFound = () => {
    return (
        <div>
            <img src={notFoundImg} className='w-100' alt="" />
        </div>
    );
};

export default NotFound;