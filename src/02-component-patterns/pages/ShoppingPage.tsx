import React, { useState } from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

          <ProductCard
            product={product}
            className="text-white bg-dark"
            key={product.id}
          >
            <ProductImage
              className="custom-img"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>

    </div>
  );
};

export default ShoppingPage;
