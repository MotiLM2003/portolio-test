import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/portfolios'>
        <a>Portfolios</a>
      </Link>
      <Link href='/blogs'>
        <a>Blogs</a>
      </Link>
      <Link href='/cv'>
        <a>cv</a>
      </Link>
    </div>
  );
};

export default Header;
