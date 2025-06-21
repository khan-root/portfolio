"use client"
import React from 'react'
import { usePathname } from 'next/navigation';


const Footer = () => {

  const path = usePathname();

  // Split path and filter out empty strings
  const pathSegments = path.split('/').filter(Boolean);
  const pathName = pathSegments[0]
  return (
    <div className={`flex items-center justify-center ${pathName === undefined ? 
      "bg-primary text-secondary-text" : "bg-secondary text-primary-text"}` 
    } >
        <span className='text-sm'>Shoutout to Adrian for the design inspiration</span>
    </div>
  )
}

export default Footer