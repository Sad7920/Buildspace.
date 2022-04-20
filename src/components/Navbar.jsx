import React, {useState} from 'react'
import { AiOutlineClose } from "react-icons/ai"
import { RiMenu4Line } from "react-icons/ri"

const Navbar = () => {

    const [nav, setNav] = useState(false);

    return (
        <div className='flex h-24 justify-between items-center max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className=' text-cyan-200 w-full font-bold text-3xl'>Buildspace.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4 cursor-pointer hover:underline hover:decoration-blue-400'>Home</li>
                <li className='p-4 cursor-pointer hover:underline hover:decoration-blue-400'>Company</li>
                <li className='p-4 cursor-pointer hover:underline hover:decoration-blue-400'>Resources</li>
                <li className='p-4 cursor-pointer hover:underline hover:decoration-blue-400'>About</li>
                <li className='p-4 cursor-pointer hover:underline hover:decoration-blue-400'>Contact</li>
            </ul>
            <div onClick={() => {setNav(!nav)}} className="block md:hidden">
                {nav ? <AiOutlineClose className='cursor-pointer w-8 h-8' /> : <RiMenu4Line className='cursor-pointer w-8 h-8' />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-slate-800 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className=' text-cyan-200 w-full font-bold text-3xl px-4 py-7'>Buildspace.</h1>
                <ul className='uppercase'>
                    <li className='p-4 cursor-pointer border-b border-b-gray-700 hover:bg-slate-700'>Home</li>
                    <li className='p-4 cursor-pointer border-b border-b-gray-700 hover:bg-slate-700'>Company</li>
                    <li className='p-4 cursor-pointer border-b border-b-gray-700 hover:bg-slate-700'>Resources</li>
                    <li className='p-4 cursor-pointer border-b border-b-gray-700 hover:bg-slate-700'>About</li>
                    <li className='p-4 cursor-pointer border-b border-b-gray-700 hover:bg-slate-700'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;