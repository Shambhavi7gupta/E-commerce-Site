import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl">E-Commerce</h1>
        <nav>
          <a href="/" className="mr-4">
            Home
          </a>
          <a href="/cart">Cart</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
