import React from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner, Footer } from "../components";

const Home = ({ products, bannerProducts }) => {
  return (
    <>
      <HeroBanner HeroBanner={bannerProducts.length && bannerProducts[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Favorite cards and other stuff</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product />
        ))}
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerProducts = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerProducts,
    },
  };
};

export default Home;
