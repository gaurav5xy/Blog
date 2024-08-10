import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className=' text-xs sm:text-lg w-full flex justify-between mt-5 text-center py-5 font-light text-neutral-400'>
        <ul className=' flex items-center gap-2 sm:gap-8'>
            <li><Link href='/'>Twitter </Link></li>
            <li><Link href='/'>LinkedIn </Link></li>
            <li><Link href='/'>Email </Link></li>
            <li><Link href='/'>RSS feed </Link></li>
            <li><Link href='/'>Add to Feedly </Link></li>
        </ul>
        <h1>©2024</h1>
    </div>
  )
}

export default Footer