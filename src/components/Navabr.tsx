"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const path = usePathname();

  // Split path and filter out empty strings
  const pathSegments = path.split('/').filter(Boolean);

  // Determine label and link based on number of segments
  let label = "Home";
  let href = "/";

  if (pathSegments.length === 2) {
    label = pathSegments[0];
    href = `/${pathSegments[0]}`;
  } else if (pathSegments.length >= 3) {
    label = pathSegments[1];
    href = `/${pathSegments[0]}/${pathSegments[1]}`;
  }

  // Capitalize the label
  const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
  const pathName = pathSegments[0]


  return (
    <div className={`h-ful pt-10 ${pathName === undefined ? 
      "bg-primary text-secondary-text" : "bg-secondary text-primary-text"}` 
    } >

      <Link href={href} className='px-5 '>
        <span className='rotate-0 md:-rotate-90 link-underline'>
          {capitalizedLabel}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
