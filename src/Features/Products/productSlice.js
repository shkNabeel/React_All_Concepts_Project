 // src/Features/Products/productSlice.js

import { createSlice, nanoid } from '@reduxjs/toolkit';



const initialState = {
  products: [
    { id: 1, title: 'phone', price: 12000, description: 'hi', category: 'electric', imageUrl: 'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?t=st=1725197445~exp=1725201045~hmac=a78cbb750f833ed0218661067f60f9e50a62e6753d8d669a1bacc9d59c4badb8&w=360' }
  ]
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = {
        id: nanoid(),
        title: action.payload.title,
        price: action.payload.price,
        description: action.payload.description,
        category: action.payload.category,
        imageUrl: action.payload.imageUrl
      };
      state.products.push(newProduct);
    }
  }
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
