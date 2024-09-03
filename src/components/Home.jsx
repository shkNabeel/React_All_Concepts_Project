 // src/components/Home.jsx

import React from 'react';
import imgEcom from '../Images/HomePageImg.jpg'; // Ensure the path is correct
import { useTheme } from '../ThemeContext'; // Import the useTheme hook

function Home() {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col md:flex-row items-center justify-between p-6 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
      {/* Left Side: Company Information */}
      <div className={`md:w-1/2 p-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
        <h1 className="text-3xl font-bold mb-4">Welcome to Our E-Commerce Store!</h1>
        <p className="text-lg mb-4">
          At Insta Mart, we are dedicated to providing the best products and services to our customers. Our mission is to deliver high-quality items and a seamless shopping experience. Explore our wide range of products and find what you need at unbeatable prices.
        </p>
        <p className="text-lg">
          Contact us for more information or if you have any questions. We are here to help you with your shopping needs and ensure a smooth and enjoyable experience.
        </p>
      </div>

      {/* Right Side: Picture Space */}
      <div className="md:w-1/2 p-4 flex justify-center items-center">
        <img
          src={imgEcom} // Use the imported image
          alt="E-Commerce"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default Home;
