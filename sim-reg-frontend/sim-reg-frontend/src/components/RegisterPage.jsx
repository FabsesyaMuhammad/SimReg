import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    NIK: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    address_id: "",
    name: "",
    date_of_birth: "",
    place_of_birth: "",
    gender: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "address_id" ? parseInt(value) || "" : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9401/auth/register",
        formData
      );

      if (response.status == 201) {
        alert("Register Success");
        navigate("/auth/login");
      }
    } catch (error) {
      console.error(error);
    }
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-50 to-white">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl"> {/* Mengubah max-w-md menjadi max-w-4xl */}
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="NIK">
                NIK
              </label>
              <input
                type="text"
                id="NIK"
                name="NIK"
                value={formData.NIK}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-red-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-red-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-red-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-red-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="address_id">
                Address ID
              </label>
              <input
                type="text"
                id="address_id"
                name="address_id"
                value={formData.address_id}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-red-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-red-400"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 mb-2"
                htmlFor="date_of_birth"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="date_of_birth"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-red-400"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 mb-2"
                htmlFor="place_of_birth"
              >
                Place of Birth
              </label>
              <input
                type="text"
                id="place_of_birth"
                name="place_of_birth"
                value={formData.place_of_birth}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-red-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="gender">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-red-400"
                required
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link
            to="/admin/register"
            className="ml-2 text-red-500 hover:underline"
          >
            Register as Admin?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;