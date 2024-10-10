import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Search } from "./Search";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap justify-between sm:justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x- w-screen">
        <Link to="/">
          <p className="text-2xl text-p1 font-semibold py-1 px-2">Chọọ</p>
        </Link>
        <button
          className="dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-xl px-3 py-1 hover:shadow-lg"
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? "Light ☀" : "Dark 🌛"}
        </button>
      </div>
      <Search />
    </div>
  );
};

Navbar.propTypes = {
  darkTheme: PropTypes.bool.isRequired, // 'darkTheme' is a required boolean
  setDarkTheme: PropTypes.func.isRequired, // 'setDarkTheme' is a required function
};
