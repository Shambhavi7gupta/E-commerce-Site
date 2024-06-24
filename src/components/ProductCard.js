import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = {
      product: product.id,
      name: product.title,
      image: product.image,
      price: product.price,
      qty: 1, // Adjust as necessary
    };
    dispatch(addToCart(item));
    console.log("Adding to cart:", item);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img
        src={product.image}
        alt={product.title}
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
    </div>
  );
};

export default ProductCard;
