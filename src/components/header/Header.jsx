import React from "react";
import IMG1 from "../../assets/trafalgar-header illustration 1.png";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="main">
        <div className="header_text">
          <h2>Virtual healthcare for you</h2>
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button> Consult today</button>
        </div>
        <div className="image">
          <img src={IMG1} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
