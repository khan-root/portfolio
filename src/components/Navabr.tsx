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

  return (
    <div>
      <Link href={href}>{capitalizedLabel}</Link>
    </div>
  );
};

export default Navbar;
