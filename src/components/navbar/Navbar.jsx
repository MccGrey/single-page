import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <h3>trafalgar</h3>
        <div>
          <ul id="navbar">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#index.html">Find a Doctor</a>
            </li>
            <li>
              <a href="index.html">App</a>
            </li>
            <li>
              <a href="index.html">About Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
