import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Home Page</h1>
          <Link
            to="/auth/login"
            className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200 focus:outline-none focus:bg-gray-200 mr-14"
          >
            Login
          </Link>
        </div>
      </header>
      <div className="container mx-auto py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Welcome to the Home Page</h2>
          <p className="text-gray-700 mb-4">This is the main landing page of your application.</p>
          <p className="text-gray-700 mb-8">Use the login button in the header to access your account.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link
              to="/auth/document"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-40 text-center"
            >
              Documents
            </Link>
            <Link
              to="/auth/upload-document"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-40 text-center"
            >
              Upload
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
