// src/components/Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../features/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemove = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
            <h3>{item.title}</h3>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
