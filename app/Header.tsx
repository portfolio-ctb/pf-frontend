import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="lg:px-24 px-12 flex mx-auto items-center py-2 h-16 backdrop-blur-2xl border-b border-gray-200 dark:border-neutral-800 sticky top-0">
      <h1 className="font-bold">Porfolio</h1>
      <div className="grow">
        <div className="flex items-center justify-center gap-4">
          <Link href={''} className="hover:text-sky-600 text-sm">
            Home
          </Link>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Link href={'login'} className="text-sm hover:text-sky-600">
          Login
        </Link>
        <Link
          href={'register'}
          className="px-3 text-sm py-1 border border-sky-600 rounded-md text-white bg-sky-600 hover:bg-transparent hover:text-sky-600"
        >
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default Header
