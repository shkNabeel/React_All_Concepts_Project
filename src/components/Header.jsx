 // src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../ThemeContext'; // Import the useTheme hook

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header 
      className={`p-4 text-bold text-[22px] rounded-md ${theme === 'light' ? ' text-black' : 'bg-gray-800 text-white'}`}
    >
      <nav className="flex justify-around">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : `text-${theme === 'light' ? 'black' : 'white'}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : `text-${theme === 'light' ? 'black' : 'white'}`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/browse"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : `text-${theme === 'light' ? 'black' : 'white'}`
          }
        >
          BrowseCategory
        </NavLink>
        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : `text-${theme === 'light' ? 'black' : 'white'}`
          }
        >
          Add Products
        </NavLink>
        <NavLink
          to="/stocks"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : `text-${theme === 'light' ? 'black' : 'white'}`
          }
        >
          Stocks
        </NavLink>
        <button onClick={toggleTheme} className="ml-4  outline rounded-md py-[5px] px-[5px]">
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
      </nav>
    </header>
  );
}

export default Header;
