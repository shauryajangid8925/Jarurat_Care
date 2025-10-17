import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Determine active link style based on current path
  const isActive = (path) => {
    return location.pathname === path
      ? "text-blue-600 border-blue-600"
      : "text-gray-600 border-transparent hover:text-blue-500 hover:border-blue-500";
  };

  return (
    <header className="bg-white/80 md:text-lg backdrop-blur-md shadow-sm top-0 z-40 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Logo linking to homepage */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo/jc.png"
              alt="Jarurat Care Logo"
              className="w-[250px] h-[50px] object-cover"
            />
          </Link>

          {/* Navigation links */}
          <nav className="flex space-x-8">
            <Link
              to="/"
              className={`font-semibold border-b-2 transition-all duration-300 py-2 px-1 ${isActive(
                "/"
              )}`}
            >
              Home
            </Link>
            <Link
              to="/patients"
              className={`font-semibold border-b-2 transition-all duration-300 py-2 px-1 ${isActive(
                "/patients"
              )}`}
            >
              Patients
            </Link>
            <Link
              to="/about"
              className={`font-semibold border-b-2 transition-all duration-300 py-2 px-1 ${isActive(
                "/about"
              )}`}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
