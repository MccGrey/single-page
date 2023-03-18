import React from "react";
import "./subheader.css";
import IMG2 from "../../assets/trafalgar-illustration sec02 1.png";

const Subheader = () => {
  return (
    <>
      <section className="main_subheader">
        <div className="main-subheader_content">
          <div>
            <img src={IMG2} alt="img" />
          </div>
          <div className="subheader-text">
            <h3>Leading healthcare providers</h3>
            <div className="bar"></div>
            <p>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subheader;
