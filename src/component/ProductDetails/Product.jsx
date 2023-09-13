import React from "react";
import "../ProductDetails/Product.css";

function ProductDetails({ detailProduct, closeDetailsModal }) {
  return (
    <div className="detailsModal">
      <div>
        <h2>Information:</h2>
        <button onClick={() => closeDetailsModal()}>X</button>
        <p>{detailProduct.name}</p>
        <img src={detailProduct.image} alt="a" />
        <p>{detailProduct.price}</p>
        <p>{detailProduct.category}</p>
        <p>{detailProduct.desc}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
