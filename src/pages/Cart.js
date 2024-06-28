import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions"; // adjust the import path as needed

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleRemove = (index) => {
    dispatch(removeFromCart(index));
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000); // Hide the popup after 2 seconds
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 border-b bg-white shadow-md rounded-lg"
            >
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{item.title}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold">
                  ${item.price.toFixed(2)}
                </span>
                <button
                  onClick={() => handleRemove(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {showPopup && (
        <div className="fixed top-12 right-4 bg-red-500 text-white py-2 px-4 rounded">
          Item Removed!
        </div>
      )}
    </div>
  );
};

export default Cart;
