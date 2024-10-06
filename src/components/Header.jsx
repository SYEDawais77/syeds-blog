import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header({ data, query, setQuery }) {
  const [showHideMenu, setShowHideMenu] = useState(false);

  const toggleMenu = () => {
    setShowHideMenu(!showHideMenu);
  };

  return (
    <header className="bg-black px-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <Link to="/">
            <div className="flex items-center space-x-3">
              <img src="/public/logo.png" alt="Logo" className="size-16" />
            </div>
          </Link>
        </div>
        <div className="hidden sm:block justify-center">
          {<Search data={data} query={query} setQuery={setQuery} />}
        </div>
        {/* Nav Links Section */}
        <nav className="hidden sm:flex space-x-6 pr-8">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="sm:hidden">
          <button
            id="mobile-menu-button"
            className="text-white"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showHideMenu && ( // Check if the menu is open
        <div id="mobile-menu" className="sm:hidden">
          <nav className="flex flex-col space-y-4 mt-4 text-center">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
