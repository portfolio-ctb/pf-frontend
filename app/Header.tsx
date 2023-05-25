import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='lg:px-24 px-12 flex mx-auto items-center py-2 h-16 backdrop-blur-2xl border-b border-gray-900 sticky top-0'>
      <h1 className='font-bold'>Porfolio</h1>
      <div className='grow'>
        <div className='flex items-center justify-center gap-4'>
          <Link href={''} className='hover:text-gray-200'>Home</Link>
        </div>
      </div>
      <div className='flex gap-4 items-center'>
        <Link href={'login'} className='hover:text-gray-200'>Login</Link>
        <Link href={'register'} className='px-2 py-1 border border-gray-300 rounded-md text-black bg-white hover:bg-black hover:text-white'>Sign up</Link>
      </div>
    </div>
  )
}

export default Header