// src/App.js
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./features/productsSlice";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());  // Fetch products when the app loads
  }, [dispatch]);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
