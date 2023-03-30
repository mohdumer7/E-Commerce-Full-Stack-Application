import React from "react";
import { Product, HeroBanner, FooterBanner } from "../components";

const Home = () => {
  return (
    <>
      HeroBanner
      <div className="products-heading">
        <div>
          <h2>Best Selling products</h2>
          <p>Speakers of Many Variations</p>
          <div className="products-container">
            {["Product1", "Product2", "Product3"].map((product) => product)}
          </div>
        </div>
      </div>
      Footer
    </>
  );
};

export default Home;
