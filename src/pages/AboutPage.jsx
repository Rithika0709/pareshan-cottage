import React from "react";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <section className="about-full-page">
      <div className="about-full-container">

        {/* LEFT IMAGE */}
        <div className="about-full-img">
          <img src="/images/About.jpg" alt="Pareshan Boys Cottage" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-full-content">
          <h1>About Pareshan Boys Cottage</h1>

          <p>
            Pareshan Boys Cottage offers a peaceful, clean, and welcoming stay
            for students, travelers, and families. Designed with comfort in mind,
            it provides a homely atmosphere, friendly hospitality, and neatly 
            maintained rooms that ensure a pleasant experience.
          </p>

          <p>
            Located just <strong>2 km from the Srisailam Dam</strong> and 
            <strong>12 km from the Sri Mallikarjuna Swamy Temple</strong>, our
            cottage is perfectly placed for guests who wish to enjoy both nature
            and spirituality during their visit.
          </p>

          <p>
            Whether you're visiting Srisailam for a short trip or a long stay, 
            Pareshan Boys Cottage makes sure you enjoy comfort, safety, and a 
            relaxing environment throughout your stay.
          </p>
        </div>

      </div>
    </section>
  );
}
