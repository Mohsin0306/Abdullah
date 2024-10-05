import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-lg">
      <div className="text-3xl font-bold">Abdullah</div>
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="./images/owner.jpeg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {/* Links for Desktop and Mobile */}
      <nav className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center space-x-8`}>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <li><a href="#home" className="hover:text-gray-600">Home</a></li>
          <li><a href="#about" className="hover:text-gray-600">About</a></li>
          <li><a href="#portfolio" className="hover:text-gray-600">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-gray-600">Contact</a></li>
        </ul>
      </nav>
      <div className="hidden md:block text-gray-600">Abdullah@gmail.com</div>
    </header>
  );
};

export default Header;
