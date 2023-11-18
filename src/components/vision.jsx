/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './navbar';
import Main from './main';
const Vision = () => {
    return (
        <>
            {/* <div>
                <Main />
            </div> */}
            <div className='flex-cols ml-20  mt-20 w-3/4 h-64'>
                <div className='w-96 h-auto font-medium text-green-800 text-4xl'><h1>Vision & Mission</h1>
                </div>
                <div className='mt-10'><p>We envision ourselves as a nationally acknowledged Training Institute grooming the
                    students and fresh graduates to be ready for tomorrow’s challenges.</p>
                    <p className='mt-5'>TFT is committed to giving hands-on experience and training students of
                        Pakistan in various fields who are ready to join their professions but are not skilled to apply their theoretical knowledge. They will be trained according to the needs of their respective industry and international standards.</p></div>
            </div>
        </>



    );
}

export default Vision;
