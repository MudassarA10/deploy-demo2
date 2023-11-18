/* eslint-disable no-unused-vars */
import React from 'react';
import img from "../assets/images/nabeelsab.png"
const Ourteam = () => {
    const Card = (props) => {
        const { pic, name, position, description } = props;

        return (
            <div className="flex justify-center mt-10">
                <div className="max-w-xs rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={pic} alt={name} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{name}</div>
                        <p className="text-gray-700 text-base mb-2">{position}</p>
                        <p className="text-gray-700 text-base">{description}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className='flex-cols  '>
                <div className="flex flex-wrap items-center justify-center gap-20 h-screen  ">
                    <Card
                        pic={img}
                        name="Dr. Nabeel Sabar Khan"
                        position="Software Engineer"
                        description="One of the significant findings of educational research is that there "
                    />
                    <Card
                        pic={img}
                        name="Dr. Nabeel Sabar Khan"
                        position="Software Engineer"
                        description="Here is a picture of John Doe, our talented Software Engineer."
                    />
                </div>
                <div className="flex  flex-wrap items-center justify-center gap-20 h-screen  ">
                    <Card
                        pic={img}
                        name="Dr. Nabeel Sabar Khan"
                        position="Software Engineer"
                        description="One of the significant findings of educational research is that there "
                    />
                    <Card
                        pic={img}
                        name="Dr. Nabeel Sabar Khan"
                        position="Software Engineer"
                        description="Here is a picture of John Doe, our talented Software Engineer."
                    />
                </div>
                <div className="flex   flex-wrap items-center justify-center gap-20 h-screen  ">
                    <Card
                        pic={img}
                        name="Dr. Nabeel Sabar Khan"
                        position="Software Engineer"
                        description="One of the significant findings of educational research is that there "
                    />
                    <Card
                        pic={img}
                        name="Dr. Nabeel Sabar Khan"
                        position="Software Engineer"
                        description="Here is a picture of John Doe, our talented Software Engineer."
                    />
                </div>
            </div>
        </>
    );
};

export default Ourteam;
