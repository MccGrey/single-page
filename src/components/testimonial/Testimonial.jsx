import React from "react";
import "./testimonial.css";
import IMG3 from "../../assets/image 1.png";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial">
        <div>
          <article className="testimonial-container">
            <div className="testimonial-header">
              <h3>What our customer are saying</h3>
              <div className="bar"></div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-info">
                <div className="testimonial-image">
                  <img src={IMG3} alt="img" />
                </div>
                <div className="testimonial-name">
                  <h4>Edward Newgate</h4>
                  <h6>Founder Circle</h6>
                </div>
              </div>
              <div className="testimonial-content">
                <p>
                  “Our dedicated patient engagement app and web portal allow you
                  to access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </div>
            </div>
          </article>

          <article className="testimonial-container">
            <div className="testimonial-header">
              <h3>What our customer are saying</h3>
              <div className="bar"></div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-info">
                <div className="testimonial-image">
                  <img src={IMG3} alt="img" />
                </div>
                <div className="testimonial-name">
                  <h4>Edward Newgate</h4>
                  <h6>Founder Circle</h6>
                </div>
              </div>
              <div className="testimonial-content">
                <p>
                  “Our dedicated patient engagement app and web portal allow you
                  to access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </div>
            </div>
          </article>

          <article className="testimonial-container">
            <div className="testimonial-header">
              <h3>What our customer are saying</h3>
              <div className="bar"></div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-info">
                <div className="testimonial-image">
                  <img src={IMG3} alt="img" />
                </div>
                <div className="testimonial-name">
                  <h4>Edward Newgate</h4>
                  <h6>Founder Circle</h6>
                </div>
              </div>
              <div className="testimonial-content">
                <p>
                  “Our dedicated patient engagement app and web portal allow you
                  to access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </div>
            </div>
          </article>

          <article className="testimonial-container">
            <div className="testimonial-header">
              <h3>What our customer are saying</h3>
              <div className="bar"></div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-info">
                <div className="testimonial-image">
                  <img src={IMG3} alt="img" />
                </div>
                <div className="testimonial-name">
                  <h4>Edward Newgate</h4>
                  <h6>Founder Circle</h6>
                </div>
              </div>
              <div className="testimonial-content">
                <p>
                  “Our dedicated patient engagement app and web portal allow you
                  to access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
