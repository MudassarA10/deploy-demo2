/* eslint-disable no-unused-vars */
import React from 'react'
import All from './all';
import Background from "../assets/images/Background.png"
import icon1 from "../assets/images/icon1.png"
import icon2 from "../assets/images/icon2.png"
import icon3 from "../assets/images/icon3.png"
import icon4 from "../assets/images/icon4.png"
const Whyus = () => {
    return (
        <>
            {/* <div>
                <All />
            </div> */}
            <div className="flex-cols h-96 justify-center" style={{ backgroundImage: `url(${Background})` }}>
                <div className='flex justify-center text-slate-100 text-5xl pt-10 '><h1>Why Us</h1></div>
                <div className='flex items-center text-slate-100 text-base mt-10 h-30 w-9/12 ml-40 '><p>We have designed our courses  according to the current and future needs of the market.
                    All the courses are skill-based and give you hands-on practice
                    to be an entrepreneur or land in the job market ahead of your fellows.
                    The courses are taught by the professionals who are responsible for hiring
                    in their companies and they are the best to decide what skills you should
                    have to be a successful candidate in their and other companies.
                    Also, if you perform well during the courses and ace the assignments
                    our partner companies will pick you before interviewing others.</p></div>

            </div>
            <div className='flex justify-around h-42 mt-10  '>
                <div className='flex-cols bg-slate-50 font-semibold h-52 w-72 rounded-3xl -mt-32'>
                    <div className='pl-5 pt-3 w-12'><img src={icon1} alt="" /></div>
                    <div className='pl-5 pt-3 text-lime-400'><h3>Flexible Learning Program</h3></div>
                    <div className='pl-5 pt-3 text-xs'><p>Providing flexible timings so you can advance your
                        career skills on time by learning new skills for about 10 hours per week.</p></div>
                </div>
                <div className='flex-cols bg-slate-50 font-semibold h-52 w-72 rounded-3xl -mt-32'>
                    <div className='pl-5 pt-3 w-12'><img src={icon2} alt="" /></div>
                    <div className='pl-5 pt-3 text-lime-400'><h3>Flexible Learning Program</h3></div>
                    <div className='pl-5 pt-3 text-xs'><p>Providing flexible timings so you can advance your
                        career skills on time by learning new skills for about 10 hours per week.</p></div>
                </div>
                <div className='flex-cols bg-slate-50 font-semibold h-52 w-72 rounded-3xl -mt-32'>
                    <div className='pl-5 pt-3 w-12'><img src={icon3} alt="" /></div>
                    <div className='pl-5 pt-3 text-lime-400'><h3>Flexible Learning Program</h3></div>
                    <div className='pl-5 pt-3 text-xs'><p>Providing flexible timings so you can advance your
                        career skills on time by learning new skills for about 10 hours per week.</p></div>
                </div>
                <div className='flex-cols bg-slate-50 font-semibold h-52 w-72 rounded-3xl -mt-32'>
                    <div className='pl-5 pt-3 w-12'><img src={icon4} alt="" /></div>
                    <div className='pl-5 pt-3 text-lime-400'><h3>Flexible Learning Program</h3></div>
                    <div className='pl-5 pt-3 text-xs'><p>Providing flexible timings so you can advance your
                        career skills on time by learning new skills for about 10 hours per week.</p></div>
                </div>
            </div>

        </>
    )
}

export default Whyus;
