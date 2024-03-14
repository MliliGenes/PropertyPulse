import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 ">
      <div className="flex justify-between items-center max-w-6xl p-3 mx-auto">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap ">
            <span className="text-slate-500">Property</span>
            <span className="text-slate-800">Pulse</span>
          </h1>
        </Link>
        <form className="bg-slate-100 px-4 py-2 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className=" bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch />
        </form>
        <ul className="flex gap-5">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className=" text-slate-700 hover:underline">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
