import React from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div className="ProductPage">
      <header>
        <h2>Товары</h2>
        <p>Главная / Товары</p>
      </header>
      <ProductList />
      <div className="buttons">
        <Link to="/add-product" className="add-product-btn">
          + Новый товар
        </Link>
        <pre>© Anymarket 2022</pre>
      </div>
    </div>
  );
};

export default ProductPage;
