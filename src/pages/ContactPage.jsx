import React from "react";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-page">

      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-container">

        {/* LEFT SIDE — CONTACT DETAILS */}
        <div className="contact-info">
          <h2>Pareshan Boys Cottage</h2>

          <p>
            📍 Eagalapenta, Telangana 509326  
            <br />
            <strong>Near:</strong> 2 km from Srisailam Dam  
            <br />
            <strong>and</strong> 12 km from Mallikarjuna Swamy Temple
          </p>

          <p><strong>Phone:</strong> +91 7793997673</p>

          <a
            className="whatsapp-btn"
            href="https://wa.me/917793997673"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp →
          </a>
        </div>

        {/* RIGHT SIDE — MAP */}
        <div className="contact-map">
          <iframe
            title="Pareshan Boys Cottage Map"
            src="https://maps.google.com/maps?q=Pareshan%20Boys%20Cottage%2C%20Eagalapenta%2C%20Telangana%20509326&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
}
