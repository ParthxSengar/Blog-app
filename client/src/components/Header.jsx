import { Navbar } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-teal-500 via-cyan-600 to-sky-900 rounded-lg text-white'>WEB</span>
          Blog
          <form action="">
            
          </form>
        </Link>
    </Navbar>
  )
}
