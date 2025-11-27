import React from "react";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-panel contact-details">
          <p className="contact-kicker">Reach out anytime</p>
          <h2 className="contact-title">Plan your stay with us</h2>
          <p className="contact-copy">
            Tell us your travel dates, group size, or any special requests.
            We&apos;ll confirm availability and share the best way to make
            your visit memorable.
          </p>

          <div className="contact-highlights">
            <article className="contact-card">
              <span className="icon" aria-hidden="true">📍</span>
              <div>
                <p className="card-label">Visit us</p>
                <p className="card-value">Eagalapenta, Srisailam</p>
              </div>
            </article>
            <article className="contact-card">
              <span className="icon" aria-hidden="true">📞</span>
              <div>
                <p className="card-label">Call / WhatsApp</p>
                <a href="tel:+917793997673" className="card-value">
                  +91 77939 97673
                </a>
              </div>
            </article>
            <article className="contact-card">
              <span className="icon" aria-hidden="true">✉️</span>
              <div>
                <p className="card-label">Email</p>
                <a
                  href="mailto:pareshanboyscottage@gmail.com"
                  className="card-value"
                >
                  pareshanboyscottage@gmail.com
                </a>
              </div>
            </article>
          </div>

          <div className="contact-actions">
            <a href="tel:+917793997673" className="contact-action primary">
              Call now
            </a>
            <a
              href="https://wa.me/917793997673"
              target="_blank"
              rel="noreferrer"
              className="contact-action"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <form className="contact-panel contact-form">
          <div className="form-grid">
            <label className="form-field">
              <span>Full name</span>
              <input type="text" placeholder="Ravi Kumar" required />
            </label>
            <label className="form-field">
              <span>Phone number</span>
              <input type="tel" placeholder="+91 90000 00000" required />
            </label>
            <label className="form-field">
              <span>Email address</span>
              <input type="email" placeholder="you@email.com" required />
            </label>
            <label className="form-field">
              <span>Preferred dates</span>
              <input type="text" placeholder="e.g. 22-24 Dec" />
            </label>
          </div>
          <label className="form-field full">
            <span>Message</span>
            <textarea
              rows="4"
              placeholder="Share plans, group size, or special requests…"
              required
            ></textarea>
          </label>
          <button type="submit">Send enquiry</button>
        </form>
      </div>
    </section>
  );
}
