import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between h-[70px] px-20 bg-gray-100">
      <div className="text-2xl">
        <Link to={"/"}>
            <img src="https://tse2.mm.bing.net/th/id/OIP.971TjB8j91uGrhXo7D6ZPQHaDt?cb=defcache2defcache=1&w=1380&h=690&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className="w-[100px]" />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-10">
            <Link to={"/"} className="hover:text-red-600">Home</Link>
            <Link to={"/about"} className="hover:text-red-600">About</Link>
            <Link to={"/contact"} className="hover:text-red-600">Contact</Link>
            <Link to={"/products"} className="hover:text-red-600">Products</Link>
        </ul>
      </nav>
      <div className="flex gap-3">
        <button className="border px-5 py-1 rounded-md ">Login</button>
        <button className="border px-5 py-1 rounded-md bg-blue-400">
          Register
        </button>
      </div>
    </header>
  );
}

export default Header;
