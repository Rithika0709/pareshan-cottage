import React, { useState } from "react";
import "./GalleryPage.css";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/images/pic1.jpg",
    "/images/pic2.jpg",
    "/images/pic3.jpg",
    "/images/pic4.jpg",
    "/images/pic5.jpg",
    "/images/pic6.jpg",
    "/images/pic7.jpg",
    "/images/pic8.jpg",
    "/images/pic9.jpg",
  ];

  return (
    <div className="gallery-page">

      <h1 className="gallery-title">Gallery</h1>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-box">
            <img 
              src={img} 
              alt={`pic-${index}`} 
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX POPUP */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Preview" />
        </div>
      )}
    </div>
  );
}
