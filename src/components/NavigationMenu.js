import React from "react";

const NavigationMenu = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="/products" className="hover:text-gray-400">
            Products
          </a>
        </li>
        <li>
          <a href="/cart" className="hover:text-gray-400">
            Cart
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
