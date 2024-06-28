import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000); // Hide the popup after 2 seconds
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h2 className="text-xl mt-4">{product.title}</h2>
      <p className="text-gray-700 mt-2">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add to Cart
      </button>
      {showPopup && (
        <div className="absolute bottom-5 right-4 bg-green-500 text-white py-2 px-4 rounded">
          Added to Cart!
        </div>
      )}
    </div>
  );
};

export default ProductCard;
