import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Header({ card }) {
  return (
    <header className="flex items-center justify-between h-[70px] px-20 bg-gray-100">
      <div className="text-2xl">
        <Link to={"/"}>
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.971TjB8j91uGrhXo7D6ZPQHaDt?cb=defcache2defcache=1&w=1380&h=690&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt=""
            className="w-[100px]"
          />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-10">
          <Link to={"/"} className="hover:text-red-600">
            Home
          </Link>
          <Link to={"/about"} className="hover:text-red-600">
            About
          </Link>
          <Link to={"/contact"} className="hover:text-red-600">
            Contact
          </Link>
          <Link to={"/products"} className="hover:text-red-600">
            Products
          </Link>
        </ul>
      </nav>
      <div className="flex gap-3">
        <Link to={"/card"}>
          <div className="relative inline-block">
            <FaShoppingCart className="text-2xl" />

            <div className="absolute -top-2 -right-2 bg-red-500 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs">
              {card.length}
            </div>
          </div>
        </Link>
        <button className="border px-5 py-1 rounded-md ">Login</button>
        <button className="border px-5 py-1 rounded-md bg-blue-400">
          Register
        </button>
      </div>
    </header>
  );
}

export default Header;
