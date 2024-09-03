 // src/components/Footer.jsx
import React from 'react';
import { FaCopyright } from 'react-icons/fa'; // Importing Font Awesome copyright icon
import { useTheme } from '../ThemeContext'; // Import the useTheme hook

function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`py-4 text-bold text-[22px] rounded-md ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-800 text-white'}`}>
      <div className="flex justify-center items-center">
        <FaCopyright className="mr-2" /> {/* Copyright icon */}
        <span>&#169; 2024 Your Company Name. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
