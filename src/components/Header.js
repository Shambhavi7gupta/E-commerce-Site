import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center ">
        <h1 className="text-2xl">E-Commerce</h1>
        <nav>
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
