import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 border-b"
          >
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
