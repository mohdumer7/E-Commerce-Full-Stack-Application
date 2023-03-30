import React from "react";
import { Product, HeroBanner, FooterBanner } from "../components";
import { client } from "../lib/client";

const Home = ({ products, banner }) => {
  return (
    <>
      <HeroBanner heroBanner={banner.length && banner[0]} />
      {console.log(banner)}
      <div className="products-heading">
        <div>
          <h2>Best Selling products</h2>
          <p>Speakers of Many Variations</p>
          <div className="products-container">
            {products?.map((product) => product.name)}
          </div>
        </div>
      </div>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const productQuery = "*[_type == 'product']";
  const products = await client.fetch(productQuery);

  const bannerQuery = "*[_type == 'banner']";
  const banner = await client.fetch(bannerQuery);

  return {
    props: { products, banner },
  };
};

export default Home;
