import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: null,
    email: null,
    password: null,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        setError(data.message);
        setLoading(setLoading(false));
        return;
      }

      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }

  return (
    <div className="px-5 max-w-lg mx-auto ">
      <h1 className="text-3xl text-center font-semibold my-5">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg outline-none"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg outline-none"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg outline-none"
          id="password"
          onChange={handleChange}
        />
        <button className="bg-slate-800 p-3 rounded-lg text-slate-100 uppercase  hover:opacity-95 disabled:bg-slate-600">
          Sign up
        </button>
        <div className="flex gap-2 mt-1 ">
          <p>Have an account?</p>
          <Link to="/sign-in">
            <span className="text-sky-800 hover:underline">Sign In</span>
          </Link>
        </div>
        {error && <div className="text-red-400">{error}</div>}
      </form>
    </div>
  );
}
