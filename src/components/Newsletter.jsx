import React from 'react'

const Newsletter = () => {
    return (
        <div className='bg-gray-900  w-full px-4 py-16 '>
            <div className='flex flex-col max-w-6xl mx-auto'>
                <div className='text-center'>
                    <h1 className='text-cyan-200 font-bold text-3xl pb-2'>Want Tips & Tricks to optimize your flow?</h1>
                    <p className='text-gray-300 text-md md:text-lg'>Sign-up to our Newsletter and stay up-to-date.</p>
                </div>
                <div className='flex mx-auto flex-col text-center'>
                    <div className='mt-6 mb-3 text-center justify-center flex mx-auto flex-col md:flex-row'>
                        <input type='email' placeholder='Enter your email' className='pl-2 w-80 py-[0.3rem] border-2 border-cyan-500 bg-cyan-100 rounded-md text-gray-800' />
                        <button className=' md:ml-4 mt-4 md:mt-0 w-36 px-4 py-[0.5rem] text-white bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-600 hover:shadow-cyan-600/70 active:bg-cyan-700 active:shadow-cyan-700/70 rounded-md mx-auto'>Notify Me!</button>
                    </div>
                    <p className='text-gray-300 text-xs'>We care about the protection of your data. Read our <span className='text-cyan-200 underline cursor-pointer text-xs'>Privacy Policy</span></p>
                </div>
            </div> 
        </div>
    )
}

export default Newsletter