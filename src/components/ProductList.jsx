// src/components/ProductList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../features/cartSlice";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={product.image} alt={product.title} style={{ width: "100px" }} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
