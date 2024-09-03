 // src/components/Product.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../Loading/Loadspinner';
import { useTheme } from '../ThemeContext';

function Product() {
  const { theme } = useTheme();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1 className={`text-center text-bold text-[20px] ${theme === 'light' ? 'text-yellow-400' : 'text-yellow-300'}`}>
        Products Calling from API
      </h1>
      <div className={`p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`}>
        {products.slice(0, 20).map(product => (
          <div key={product.id} className={`border rounded-lg overflow-hidden shadow-md w-72 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover cursor-pointer"
              />
            </Link>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 truncate">{product.title}</h2>
              <p className={`mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>{product.category}</p>
              <p className={`text-lg font-semibold mb-2 ${theme === 'light' ? 'text-black' : 'text-yellow-400'}`}>${product.price}</p>
              <p className={`text-gray-600 truncate ${theme === 'light' ? 'text-gray-800' : 'text-gray-300'}`}>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
