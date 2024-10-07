import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="text-white text-lg font-bold">MyApp</a>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block md:hidden text-white"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <a className="text-white hover:text-gray-400">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-white hover:text-gray-400">About</a>
          </Link>
          <Link href="/services">
            <a className="text-white hover:text-gray-400">Services</a>
          </Link>
          <Link href="/contact">
            <a className="text-white hover:text-gray-400">Contact</a>
          </Link>
        </div>

        {/* Dropdown menu for mobile */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden absolute top-16 left-0 w-full bg-gray-800 z-10 space-y-4 p-4`}
        >
          <Link href="/">
            <a className="block text-white">Home</a>
          </Link>
          <Link href="/about">
            <a className="block text-white">About</a>
          </Link>
          <Link href="/services">
            <a className="block text-white">Services</a>
          </Link>
          <Link href="/contact">
            <a className="block text-white">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
