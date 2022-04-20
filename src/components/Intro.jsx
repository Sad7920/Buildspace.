import React from 'react'
import Typed from "react-typed";

const Intro = () => {
  return (
    <div className='text-white'>
        <div className='px-4 max-w-[800px] mt-[-96] w-full h-[87vh] mx-auto text-center flex flex-col justify-center'>
            <p className='text-cyan-200 font-bold'> GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-5xl font-bold md:py-5 sm:py-4 py-3'>Grow with data.</h1>
            <div className='flex justify-center'>
                <p className=' md:text-4xl sm:text-2xl text-xl font-bold text-gray-300'>Fast, flexible financing for</p>
                <Typed 
                className='md:text-4xl sm:text-2xl text-xl text-gray-400 font-bold pl-1 sm:pl-2 md:pl-3'
                strings={[
                    'BTB.',
                    'SASS.',
                    'BTC.',
                ]} 
                typeSpeed={100}
                backSpeed={120}
                loop
                 />
            </div>
            <p className=' md:text-2xl text-xl text-gray-500 pt-1 sm:pt-2 md:pt-3'>Monitor your Data Analytics to increase revenue for BTB, BTC and SASS platforms.</p>
            <button className='mt-10 w-36 px-4 py-2 bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-600 hover:shadow-cyan-600/70 active:bg-cyan-700 active:shadow-cyan-700/70 rounded-md mx-auto '>Get Started!</button>
        </div>
    </div>
    )
}

export default Intro