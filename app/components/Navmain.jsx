import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navmain() {
  return (
    <nav className='flex justify-between items-center p-5 font-sans'>
      <div className='items-center'>
        <ul className='md:flex md:items-center gap-6'>
          <li >
            <Link href='/'>
              <Image 
                src='/Logo/medium-logo.png'
                width={176}
                height={44}
                alt='mediumlogo'
              />
            </Link>
          </li>
          <li className='max-sm:hidden transform transition duration-200 hover:scale-110 opacity-75 hover:opacity-100'>
            <Link href="/about">
              About
            </Link>
          </li>
          <li className='max-sm:hidden transform transition duration-200 hover:scale-110 opacity-75 hover:opacity-100'>
            <Link href="#">
              Contact
            </Link>
          </li>
          <li className='max-sm:hidden'>
            <Link href="#" className='bg-[#424242] text-white p-2 px-4 rounded-3xl transform transition duration-200  hover:bg-black drop-shadow-lg hover:drop-shadow-xl'>
              Follow
            </Link>
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-6 text-sm'>
        <Link href='../login' className='text-[#191919] max-sm:hidden border border-black p-2 px-4 rounded-3xl'>Sign In</Link>
        <Link href='#' className='text-[#ffffff] max-sm:hidden mr-5 p-2 px-4 bg-[#424242] hover:bg-black rounded-3xl'>Sign up</Link>
      </div>
    </nav>
  )
}
