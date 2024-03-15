import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="px-5 max-w-lg mx-auto ">
      <h1 className="text-3xl text-center font-semibold my-5">Sign Up</h1>
      <form className="flex flex-col gap-4  ">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-800 p-3 rounded-lg text-slate-100 uppercase  hover:opacity-95 disabled:bg-slate-600">
          Sign up
        </button>
        <div className="flex gap-2 mt-1 ">
          <p>have an account?</p>
          <Link to="/sign-in">
            <span className="text-sky-800 hover:underline">Sign In</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
