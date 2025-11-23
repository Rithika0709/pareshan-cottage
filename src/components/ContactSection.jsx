import React from "react";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section">

      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-container">

        {/* LEFT SIDE — Details */}
        <div className="contact-info">

          <div className="info-box">
            <span className="icon">📍</span>
            <p>Pareshan Boys Cottage, Srisailam</p>
          </div>

          <div className="info-box">
            <span className="icon">📞</span>
            <p>+91 77939 97673</p>
          </div>

          <div className="info-box">
            <span className="icon">✉️</span>
            <p>
  Email:  
  <a href="mailto:pareshanboyscottage@gmail.com" className="contact-link">
    pareshanboyscottage@gmail.com
  </a>
</p>

          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}
