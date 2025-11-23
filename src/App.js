import React, { useState } from "react";
import "./App.css";

// Components used inside Home page
import AboutPareshanBoys from "./components/AboutPareshanBoys";
import ContactSection from "./components/ContactSection";

// React Router
import { Routes, Route, Link } from "react-router-dom";

// Separate full pages
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* ROUTES */}
      <Routes>

        {/* FULL HOME PAGE */}
        <Route 
          path="/" 
          element={
            <>
              {/* HERO SECTION */}
              <section className="hero" id="home">
                <img
                  src="/images/hero.jpg"
                  alt="Pareshan Boys Cottage"
                  className="hero-img"
                />

                <div className="hero-content">
                  <h1>Pareshan Boys <br /> Cottage</h1>

                  <a
                    href="https://wa.me/917793997673"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="book-btn"
                  >
                    Book Now <span className="arrow">→</span>
                  </a>

                  <p className="tagline">
                    Stay with comfort. Leave with memories.
                  </p>
                </div>
              </section>

              {/* ABOUT SECTION */}
              <section id="about">
                <AboutPareshanBoys />
              </section>

              {/* 2 ROOM GALLERY PREVIEW */}
              <section className="room-gallery" id="gallery">

                {/* ROOM 1 – Image Right */}
                <div className="room-row room1">
                  <div className="room-info">
                    <h2>Premium Sharing Room</h2>
                    <p>
                      Spacious, clean, and designed for comfort. 
                      Perfect for students and travelers wanting a peaceful stay.
                    </p>
                  </div>
                  <img src="/images/img1.jpg" className="room-img" alt="Room" />
                </div>

                {/* ROOM 2 – Image Left */}
                <div className="room-row">
                  <img src="/images/img2.jpg" className="room-img" alt="Room" />
                  <div className="room-info">
                    <h2>Deluxe Private Room</h2>
                    <p>
                      A private, secure, and cozy room for complete relaxation. 
                      Ideal for guests who prefer privacy and comfort.
                    </p>
                  </div>
                </div>

              </section>

              {/* LIGHTBOX (not used now but kept safe) */}
              {selectedImage && (
                <div
                  className="lightbox"
                  onClick={() => setSelectedImage(null)}
                >
                  <img src={selectedImage} alt="preview" />
                </div>
              )}
              {/* LOCATION SECTION (Same as Contact Page) */}
<section className="home-location">
  <div className="home-location-map">
    <iframe
  title="pareshan-boys-cottage-map"
  src="https://www.google.com/maps?q=Pareshan+Boys+Cottage,Eagalapenta,Telangana&output=embed"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

    
  </div>
</section>


              {/* CONTACT SECTION */}
              <section id="contact">
                <ContactSection />
              </section>
            </>
          } 
        />

        {/* OTHER FULL PAGES */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>

    </div>
  );
}

export default App;
