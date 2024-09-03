import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import Product from './components/Product';
 import Stock from './components/Stock';
import AddProduct from './components/AddProduct';
import Layout from './Layout';
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import BrowseCategory from './components/BrowseCategory';
import { store } from './app/store';
import { Provider } from 'react-redux';
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='product' element={<Product />} />
    <Route path='browse' element={<BrowseCategory />} />
    <Route path='add' element={<AddProduct />} />
    <Route path='stocks' element={<Stock />} />

  </Route>

))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



  <Provider store={store}>
    <ThemeProvider><RouterProvider router={router} /></ThemeProvider>
  </Provider>



);
