import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex items-center h-28 px-28 bg-dark'>
        <div className='flex w-full justify-between items-center'>
            <div className='flex justify-center items-center w-28 h-16 bg-main rounded'>
                LOGO
            </div>
            
            <div className='flex gap-10 items-center'>
                <div className='flex gap-12 text-light'>
                    <Link href='#'>Explore</Link>
                    <Link href='#'>How it works</Link>
                    <Link href='#'>Community</Link>
                </div>
                
                <button className='flex justify-center items-center w-36 h-8 bg-main text-dark rounded'>
                    Connect Wallet
                </button>
            </div>
        </div>
    </div>
  )
}
