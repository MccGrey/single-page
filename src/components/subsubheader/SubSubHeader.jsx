import React from "react";
import IMG3 from "../../assets/trafalgar-illustration sec03 1.png";
import { BsArrowDown } from "react-icons/bs";

const SubSubHeader = () => {
  return (
    <>
      <section className="main_subheader">
        <div className="main-subheader_content">
          <div className="subheader-text">
            <h3>Download our mobile apps</h3>
            <div className="bar"></div>
            <p>
              Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely
            </p>
            <button>
              Download <BsArrowDown />
            </button>
          </div>

          <div>
            <img src={IMG3} alt="img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SubSubHeader;
