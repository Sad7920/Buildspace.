import React from 'react'
import Laptop from '../assets/laptop.jpeg'

const Analytics = () => {
  return (
    <div className=' w-full bg-white py-16 px-4'>
        <div className=' max-w-7xl mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt='laptop' className='w-full h-full' />
            <div className='justify-center flex flex-col'>
                <h1 className='text-cyan-500 font-bold text-sm py-2 mx-auto md:mx-0'>DATA ANALYTICS DASHBOARD</h1>
                <h1 className=' font-extrabold text-center md:text-left text-xl pb-2 text-gray-800 mx-auto md:mx-0'>MANAGE DATA ANALYTICS CENTRALLLY</h1>
                <p className='text-gray-600 text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className='mt-10 w-36 px-4 py-2 bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-600 hover:shadow-cyan-600/70 active:bg-cyan-700 active:shadow-cyan-700/70 rounded-md md:mx-0 sm:mx-auto mx-auto text-white'>Get Started!</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics