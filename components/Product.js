import { urlFor } from "@/lib/client";
import Link from "next/link";
import React from "react";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            alt="Product-image"
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name" style={{ fontWeight: "500" }}>
            {name}
          </p>
          <p className="product-price" style={{ fontWeight: "350" }}>
            ${price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
