import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-cyan-950 flex items-center justify-between px-6 shadow-md shadow-emerald-400/50">
      <h2 className="text-sm text-cyan-300 font-extrabold md:text-lg lg:text-xl ">
        SARAYU
      </h2>

      <input
        type="search"
        placeholder="Search..."
        className="px-3 py-1 rounded-md outline-none bg-white min-w-sm
        md:min-w-lg lg:min-w-xl focus:ring focus:ring-cyan-700"
      />

      <div>
        <FaRegUserCircle className="text-cyan-200 font-medium cursor-pointer " />
      </div>
    </nav>
  );
};

export default Navbar;
