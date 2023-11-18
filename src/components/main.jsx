/* eslint-disable no-unused-vars */
import React from 'react';

import Navbar from './navbar';
import img2 from "../assets/images/nabeel.png"
const Main = () => {


    return (
        <>
            {/* <div>

                <Navbar />
            </div> */}
            <div className='flex w-299 h-86'>
                <h1 className='ml-20 mt-20 text-6xl'>About Us</h1>
            </div>
            <div className='flex justify-center h-max'>
                <div className='w-360 h-54 mt-10 ml-15'>
                    <img src={img2} alt="" />
                </div>
                <div className='flex-col w-[606px] -ml-12 bg-white mt-24 h-96 border-4 border-lime-500/100 '>
                    <div className='flex justify-center text-2xl mt-6 font-semibold'><h1>PROF. DR NABEEL SABIR</h1></div>
                    <div className='flex justify-center text-xl '>FOUNDER & CEO</div>
                    <div className='flex  w-3/3 ml-10 mr-10  mt-3 text-lg h-52'><span>One of the significant findings of educational research is that there is jarring gap between theory and practice in university programs. Due to this gap, graduating students
                        are not job / work ready, often leaving them in limbo
                        after graduation. We started TFT with an aim to provide the
                        entrepreneurship ready and bridge gaps between theory and practice.</span></div>
                </div>
            </div>
        </>
    );
};

export default Main;