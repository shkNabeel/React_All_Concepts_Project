 // src/components/AddProduct.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Features/Products/productSlice'; // Adjust the import path accordingly
import { useTheme } from '../ThemeContext'; // Import the useTheme hook

function AddProduct() {
  const dispatch = useDispatch();
  const { theme } = useTheme(); // Get the current theme from the context

  const [productData, setProductData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(productData));
    // Reset form state
    setProductData({
      title: '',
      price: '',
      description: '',
      category: '',
      imageUrl: ''
    });
  };

  return (
    <div className={`p-6 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
      <h1 className={`text-center text-2xl font-bold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
        Add New Product
      </h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className={`block ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Title</label>
          <input
            type="text"
            name="title"
            value={productData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className={`block ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className={`block ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className={`block ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Category</label>
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className={`block ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={productData.imageUrl}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
