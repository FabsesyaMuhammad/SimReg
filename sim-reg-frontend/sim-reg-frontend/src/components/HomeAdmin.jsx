import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaListAlt, FaSignInAlt } from 'react-icons/fa';
import adminRequestsIcon from '../assets/sched.jpg'; // Pastikan gambar ini ada

const HomeAdmin = () => {
  const loggedAccount = localStorage.getItem('loggedAccount');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedAccount');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-50 to-white">
      <header className="bg-gradient-to-r from-red-600 to-red-500 text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">Admin</h1>
          <div className="flex items-center">
            {loggedAccount ? (
              <div className="flex items-center">
                <p className="mr-4">{loggedAccount}</p>
                <button
                  onClick={handleLogout}
                  className="bg-white text-red-600 py-2 px-4 rounded hover:bg-gray-100 focus:outline-none focus:bg-gray-200 flex items-center"
                >
                  <FaSignInAlt className="mr-2" />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth/login"
                className="bg-white text-red-600 py-2 px-4 rounded hover:bg-gray-100 focus:outline-none focus:bg-gray-200 flex items-center"
              >
                <FaSignInAlt className="mr-2" />
                Login
              </Link>
            )}
          </div>
        </div>
      </header>
      <div className="container mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Welcome, Admin</h2>
          <p className="text-gray-600 mb-4">
            Manage user requests and maintain system operations from here.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:w-full justify-center">
          <div className="flex flex-col items-center">
            <img
              src={adminRequestsIcon}
              alt="Admin Requests"
              className="w-full h-64 object-cover rounded-lg bg-white border-2 border-gray"
            />
            <Link
              to="/admin/requests"
              className="bg-red-500 text-white py-4 px-8 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-700 flex items-center shadow-lg transform transition duration-300 hover:scale-105"
            >
              <FaListAlt className="mr-2" />
              View Requests
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
