import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'

const Homepage = () => {
  return (
    <div className='h-screen bg-gray-900'>
        <Navbar />
        <Intro />
    </div>
  )
}

export default Homepage