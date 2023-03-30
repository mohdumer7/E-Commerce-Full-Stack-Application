import React from "react";

const Home = () => {
  return (
    <div>
      HeroBanner
      <div>
        <h2>Best Selling products</h2>
        <p>Speakers of Many Variations</p>
        <div>
          {["Product1", "Product2", "Product3"].map((product) => product)}
        </div>
        Footer
      </div>
    </div>
  );
};

export default Home;
