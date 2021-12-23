import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div>
      <Link href='/' className='m-5'>
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

      <button>Login</button>
      <button>logout</button>
    </div>
  );
};

export default Header;
