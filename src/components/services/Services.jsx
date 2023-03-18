import React from "react";
import "./services.css";
import { BsBookshelf } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { GiHoneyJar } from "react-icons/gi";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { FaFirstAid } from "react-icons/fa";
import { GrBusinessService } from "react-icons/gr";

const Services = () => {
  const data = [
    {
      id: 1,
      icon: { BsBookshelf },
      title: "Search doctor",
      note: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },
    {
      id: 2,
      icon: { VscSearch },
      title: "Online pharmacy",
      note: "Buy  your medicines with our mobile application with a simple delivery system",
    },
    {
      id: 3,
      icon: { GiHoneyJar },
      title: "Online pharmacy",
      note: "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      id: 4,
      icon: { BsJournalBookmarkFill },
      title: "Details info",
      note: "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      id: 5,
      icon: { FaFirstAid },
      title: "Emergency care",
      note: "You can get 24/7 urgent care for yourself or your children and your lovely family",
    },
    {
      id: 6,
      icon: { GrBusinessService },
      title: "Tracking",
      note: "Track and save your medical history and health data ",
    },
  ];

  return (
    <>
      <section className="services">
        <div className="services_header">
          <h3>Our services</h3>
          <div className="bar"></div>
          <p>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>
      </section>
      <div className="main_service_card">
        <article className="service_card">
          <div className="card_content">
            <div className="icon">
              <BsBookshelf />
            </div>
            <h3>Search doctor</h3>
            <p>
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
        </article>

        <article className="service_card">
          <div className="card_content">
            <div className="icon">
              <BsBookshelf />
            </div>
            <h3>Search doctor</h3>
            <p>
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
        </article>

        <article className="service_card">
          <div className="card_content">
            <div className="icon">
              <BsBookshelf />
            </div>
            <h3>Search doctor</h3>
            <p>
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
        </article>

        <article className="service_card">
          <div className="card_content">
            <div className="icon">
              <BsBookshelf />
            </div>
            <h3>Search doctor</h3>
            <p>
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
        </article>

        <article className="service_card">
          <div className="card_content">
            <div className="icon">
              <BsBookshelf />
            </div>
            <h3>Search doctor</h3>
            <p>
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
        </article>

        <article className="service_card">
          <div className="card_content">
            <div className="icon">
              <BsBookshelf />
            </div>
            <h3>Search doctor</h3>
            <p>
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
        </article>
      </div>
      <div className="btn">
        <button>Load More</button>
      </div>
    </>
  );
};

export default Services;
