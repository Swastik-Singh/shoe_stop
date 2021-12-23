import React, { useState } from "react";
import "./index.css";

export default function ProductCard({ productData }) {
  const { name, brandName, images, price, color } = productData;
  const [mainImage, setMainImage] = useState(images[0] || "");
  return (
    <div className="div__productCard">
      <div className="div__productCard-title">
        <p className="productName">{name}</p>
        <h4 className="brandName">{brandName}</h4>
      </div>
      <div className="productIndicator" style={{ backgroundColor: color }} />
      <div className="div__productCard-image">
        <img className="imgProduct" src={mainImage} alt="shoe_primary" />
      </div>
      <div className="div__productCard-details">
        <div className="div__productCard-price">
          <p className="lblPrice">Price</p>
          <h3>$ {price}</h3>
        </div>
        <div className="div__productCard-otherImages">
          {images.map((image, index) => (
            <img
              key={index}
              onClick={() => setMainImage(image)}
              className={`imgAltProduct ${image === mainImage && "imgMain"}`}
              src={image}
              alt={`shoe_${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
