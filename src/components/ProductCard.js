import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h2 className="text-xl mt-4">{product.name}</h2>
      <p className="text-gray-700 mt-2">${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
