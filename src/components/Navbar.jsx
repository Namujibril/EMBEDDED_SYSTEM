import React from 'react'

const Navbar = () => {
  return (
   <header className='w-full bg-slate-600'>
    <div className='container flex justify-center items-center shadow-lg'>

    <div>
        <h1 className='text-3xl font-bold font-heading'>EMB<span className='text-cyan-300'>ed</span>
        </h1>
    </div>
    <ul className='lg:flex justify-between w-[40%] hidden'>
        
        <li><a href="/programming">PROGRAMMING</a></li>
        <li><a href="embedded">EMBEDDED</a></li>
        <li><a href="electronics">ELECTRONICS</a></li>
        <li><a href="iot">IoT</a></li>
    </ul>

    </div>
   </header>
  )
}

export default Navbar
