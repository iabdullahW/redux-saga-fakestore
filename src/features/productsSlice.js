// src/features/productsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],    // List of products
  loading: false, // Loading state
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state) {
      state.loading = true;
    },
    setProducts(state, action) {
      state.items = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchProducts, setProducts } = productsSlice.actions;
export default productsSlice.reducer;
