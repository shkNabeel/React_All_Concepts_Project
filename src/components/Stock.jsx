import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '../ThemeContext'; // Import the useTheme hook

function Stock() {
  const products = useSelector((state) => state.products || []); // Fallback to empty array
  const { theme } = useTheme(); // Get the current theme from the context

  return (
    <div className={`flex items-center justify-center pt-8 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
      <div className="w-full max-w-4xl">
        <h1 className={`text-2xl font-bold text-center mb-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
          Product List
        </h1>
        <ul className="list-none space-y-4">
          {products.length > 0 ? (
            products.map((product) => (
              <li
                className={`flex items-center p-4 rounded shadow-lg ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
                key={product.id}
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-24 h-24 object-cover rounded mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <p className="text-sm">{product.category}</p>
                  <p className="text-md font-bold">${product.price}</p>
                  <p className="text-sm">{product.description}</p>
                </div>
              </li>
            ))
          ) : (
            <p className={`text-center ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              No products available.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Stock;
