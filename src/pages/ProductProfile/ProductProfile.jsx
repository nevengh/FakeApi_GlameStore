import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductProfile.css";
import { useCart } from "../../Context/CartContext";

const ProductProfile = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div className="product-profile">Loading...</div>;
  // تفكيك العناصر من تجل زر الاضافة
   const { image, title, description, price, category, rating } = product;
  return (
    <div className="product-profile">
      <img src={product.image} alt={product.title} />
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <p className="category">{product.category}</p>
        <p>Rating: {product.rating?.rate} / 5</p>
        {/* زر الإضافة إلى السلة */}
        <button
          className="add-btn"
          onClick={() =>
            addToCart({
              id: parseInt(id),
              img: image,
              title,
              desc: description,
              price,
              category,
              rate: rating?.rate,
            })
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductProfile;
