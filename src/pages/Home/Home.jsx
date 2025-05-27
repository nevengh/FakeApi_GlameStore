import React, { useEffect, useState } from "react";

import axios from "axios";
import "./Home.css";
import ProductBox from "../../components/shared/ProductBox/ProductBox";
import { Container } from "react-bootstrap";
import Hero from "../../components/Hero/Hero";
import man from '../../assets/handsome-adult-man-looking-away.png'
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Home">
      <Hero/>
      <Container>
        <div className="product-home">
          <h1 className="our-product">Our Product</h1>
          <div className="products-container">
            {products.slice(0, 10).map((product) => (
              <ProductBox
                id={product.id}
                key={product.id}
                rate={product.rating?.rate}
                category={product.category}
                desc={product.description}
                img={product.image}
                price={product.price}
                title={product.title}
              />
            ))}
          </div>
        </div>
        {/* slae */}
        <div className="sale-section mt-5">
          <img src={man} alt="man holding cart shooping" />
          <div className="sale-contetn">
            <h4>SALES FEVER</h4>
            <h2><span>20% </span>OFF EVERYTHING</h2>
            <p>offer ends in</p>

          </div>
        </div>

      </Container>
    </div>
  );
};

export default Home;
