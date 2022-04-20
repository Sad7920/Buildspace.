import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-gray-900 text-white'>
            <div className=' max-w-6xl mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
                <div>
                    <h1 className=' text-cyan-200 w-full font-bold text-3xl'>Buildspace.</h1>
                    <p className='text-gray-300 text-left my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='flex '>
                        <FaDribbbleSquare size={32} color='rgb(165 243 252 / var(--tw-text-opacity))' className='mr-10 md:mr-6 cursor-pointer' />
                        <FaFacebookSquare size={32} color='rgb(165 243 252 / var(--tw-text-opacity))' className='mr-10 md:mr-6 cursor-pointer' />
                        <FaGithubSquare size={32} color='rgb(165 243 252 / var(--tw-text-opacity))' className='mr-10 md:mr-6 cursor-pointer' />
                        <FaInstagramSquare size={32} color='rgb(165 243 252 / var(--tw-text-opacity))' className='mr-10 md:mr-6 cursor-pointer' />
                        <FaTwitterSquare size={32} color='rgb(165 243 252 / var(--tw-text-opacity))' className='mr-10 md:mr-6 cursor-pointer' />
                    </div>
                </div>
                <div className='lg:col-span-2 flex justify-between lg:justify-around py-10'>
                    <div>
                        <h1 className='text-2xl text-cyan-200 py-2'>Solutions</h1>
                        <ul>
                            <li className='text-gray-400 cursor-pointer hover:underline hover:decoration-cyan-500'>Analytics</li>
                            <li className='text-gray-400 cursor-pointer hover:underline hover:decoration-cyan-500'>Marketing</li>
                            <li className='text-gray-400 cursor-pointer hover:underline hover:decoration-cyan-500'>Commerce</li>
                            <li className='text-gray-400 cursor-pointer hover:underline hover:decoration-cyan-500'>Insights</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-2xl text-cyan-200 py-2'>Support</h1>
                        <ul>
                            <li className='text-gray-400 cursor-pointer hover:underline hover:decoration-cyan-500'>Pricing</li>
                            <li className='text-gray-400 cursor-pointer hover:underline hover:decoration-cyan-500'>Documentation</li>
                            <li className='text-gray-400 cursor-pointer hover:underline hover:decoration-cyan-500'>Guides</li>
                            <li className='text-gray-400 cursor-pointer hover:underline hover:decoration-cyan-500'>API Status</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-2xl text-cyan-200 py-2'>Company</h1>
                        <ul>
                            <li className='text-gray-400 cursor-pointer hover:underline hover:decoration-cyan-500'>About</li>
                            <li className='text-gray-400 cursor-pointer hover:underline hover:decoration-cyan-500'>Blogs</li>
                            <li className='text-gray-400 cursor-pointer hover:underline hover:decoration-cyan-500'>Jobs</li>
                            <li className='text-gray-400 cursor-pointer hover:underline hover:decoration-cyan-500'>Press</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer