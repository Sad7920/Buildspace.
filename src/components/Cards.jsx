import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
    return (
        <div className='bg-white pt-20 pb-40 px-4 w-full'>
        <h1 className='text-center mb-24 text-gray-800 font-bold text-3xl'>Choose the plan that's right for you.</h1>
            <div className=' max-w-6xl mx-auto grid md:grid-cols-3 gap-24 md:gap-8'>
                <div className=' w-full text-center border rounded-xl shadow-2xl px-12 hover:scale-105 duration-300'>
                    <img src={Single} alt='single' className='w-20 mx-auto mt-[-3rem] bg-white' />
                    <h1 className='text-gray-800 font-bold text-3xl my-2'>Single User</h1>
                    <p className='text-gray-800 font-bold text-3xl p-2 my-4'>&#8377;10k</p>
                    <div>
                        <p className='text-gray-600 text-lg py-2 border-y'>500 GB Storage</p>
                        <p className='text-gray-600 text-lg py-2'>1 User Allowed</p>
                        <p className='text-gray-600 text-lg py-2 border-y'>Send Upto 2 GB</p>
                    </div>
                    <button className=' my-4 w-36 px-4 py-[0.5rem] text-white bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-600 hover:shadow-cyan-600/70 active:bg-cyan-700 active:shadow-cyan-700/70 rounded-md mx-auto'>Start Trial</button>
                </div>

                <div className=' w-full text-center border rounded-xl shadow-2xl px-12 hover:scale-105 duration-300'>
                    <img src={Double} alt='single' className='w-20 mx-auto mt-[-3rem] bg-white' />
                    <h1 className='text-gray-800 font-bold text-3xl my-2'>Partnership</h1>
                    <p className='text-gray-800 font-bold text-3xl p-2 my-4'>&#8377;15k</p>
                    <div>
                        <p className='text-gray-600 text-lg py-2 border-y'>1 TB Storage</p>
                        <p className='text-gray-600 text-lg py-2'>3 User Allowed</p>
                        <p className='text-gray-600 text-lg py-2 border-y'>Send Upto 10 GB</p>
                    </div>
                    <button className=' my-4 w-36 px-4 py-[0.5rem] text-white bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-600 hover:shadow-cyan-600/70 active:bg-cyan-700 active:shadow-cyan-700/70 rounded-md mx-auto'>Start Trial</button>
                </div>

                <div className=' w-full text-center border rounded-xl shadow-2xl px-12 hover:scale-105 duration-300'>
                    <img src={Triple} alt='single' className='w-20 mx-auto mt-[-3rem] bg-white' />
                    <h1 className='text-gray-800 font-bold text-3xl my-2'>Group Account</h1>
                    <p className='text-gray-800 font-bold text-3xl p-2 my-4'>&#8377;25k</p>
                    <div>
                        <p className='text-gray-600 text-lg py-2 border-y'>5 TB Storage</p>
                        <p className='text-gray-600 text-lg py-2'>10 User Allowed</p>
                        <p className='text-gray-600 text-lg py-2 border-y'>Send Upto 25 GB</p>
                    </div>
                    <button className=' my-4 w-36 px-4 py-[0.5rem] text-white bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-600 hover:shadow-cyan-600/70 active:bg-cyan-700 active:shadow-cyan-700/70 rounded-md mx-auto'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards