import React from 'react'

const Navbar = () => {
  return (
    <section className='w-full px-10 py-3 fixed top-0 left-0 z-999'>
        <div className='flex items-center gap-1'>
            <img className='h-20 w-20' src="/javascript.png" alt="" />
            <div>
                <h2 className='text-white text-3xl poppins-black'>JavaScript</h2>
                <h2 className='text-white text-3xl poppins-black'>Domination</h2>
            </div>
        </div>
    </section>
  )
}

export default Navbar