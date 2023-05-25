import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center p-24 gap-2 bg-none'>
      <h1 className='font-bold text-3xl'>Log in to Porfolio</h1>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  )
}

export default Login