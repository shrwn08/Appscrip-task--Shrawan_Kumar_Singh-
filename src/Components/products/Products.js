import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useGlobalContext } from "../context/contextAPI";
import "./products.css";
import Sidebar from "../sidebar/Sidebar";
const Products = () => {
  const { products } = useGlobalContext();
  if (!products) {
    return <div>Loading...</div>;
  }
  console.log(products);
  return (
    <div className="products-container">
      
      <div className="products-subcontainer">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
                <img src={product.image} alt={product.title} className="product-image"/>
            </div>
            <div className="product-name-heart">
              <div className="product-name">{product.title.substring(0,15)}...</div>
              <div className="heart">
                <AiOutlineHeart size={16} />
              </div>
            </div>
            <div className="message">
              Sign in or{" "}
              <span className="create-message">
                Create an account to see pricing
              </span>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
