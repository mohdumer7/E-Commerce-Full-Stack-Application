import { client, urlFor } from "@/lib/client";
import React from "react";

const ProductDetails = ({ product, products }) => {
  const { imageConfigDefault, name, details, price } = product;
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  const productQuery = `*[_type == 'product' && slug.current == '${slug}'][0]`;
  const product = await client.fetch(productQuery);

  const productsQuery = "*[_type == 'product']";
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
