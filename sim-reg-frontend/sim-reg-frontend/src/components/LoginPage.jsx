import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9401/auth/login", {
        username,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("loggedAccount", username);
        alert("Login Success");
        navigate("/auth");
      }

      if (response.status === 201) {
        localStorage.setItem("loggedAccount", username);
        alert("Login Success");
        navigate("/admin");
      }
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }

    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-50 to-white flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-red-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-red-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-700">Don't Have an Account Yet?</span>
          <Link
            to="/auth/register"
            className="ml-2 text-red-500 hover:underline"
          >
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
