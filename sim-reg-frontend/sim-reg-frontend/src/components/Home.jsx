import React from "react";
import { FaFileAlt, FaInfoCircle, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import simcImage from "../assets/simm.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-50 to-white">
      <header className="bg-gradient-to-r from-red-600 to-red-500 text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">
            Driving License Registration
          </h1>
          <div>
            <Link
              to="/auth/login"
              className="bg-white text-red-600 py-2 px-4 rounded hover:bg-gray-100 focus:outline-none focus:bg-gray-200 flex items-center"
            >
              <FaSignInAlt className="mr-2" />
              Login
            </Link>
          </div>
        </div>
      </header>
      <div className="container mx-auto py-20 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              About
            </h3>
            <p className="text-gray-600 leading-relaxed">
              This is a web application designed to streamline the process of
              license registration. You can
              easily submit the required documents and track the status of your
              registration.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Our goal is to provide a seamless and efficient experience for all
              users, ensuring that the registration process is hassle-free and
              accessible. We prioritize data security and privacy, so you can
              rest assured that your personal information is in safe hands.
            </p>
            
          </div>
          <div className="md:w-1/2">
            <img
              src={simcImage}
              alt="License Registration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
