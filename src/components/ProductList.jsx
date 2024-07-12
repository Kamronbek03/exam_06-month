import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

import edit from "../assets/images/edit.svg";
import Delete from "../assets/images/delete.svg";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (id) => {
    navigate(`/editproduct/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Вы уверены, что хотите удалить этот товар?")) {
      axios
        .delete(`http://localhost:3000/products/${id}`)
        .then(() => {
          setProducts(products.filter((product) => product.id !== id));
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-list">
      <div className="hero">
        <h1>Все товары ({filteredProducts.length})</h1>
        <input
          type="text"
          placeholder="Поиск"
          value={search}
          onChange={handleSearch}
        />
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>НАИМЕНОВАНИЕ</th>
            <th>АРТИКУЛ</th>
            <th>БРЕНД</th>
            <th>ЦЕНА</th>
            <th>ЦЕНА СО СКИДКОЙ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.code}</td>
              <td>{product.brand}</td>
              <td>{product.price}$</td>
              <td>{product.priceInSale}$</td>
              <td>
                <button onClick={() => handleEdit(product.id)}>
                  <img src={edit} alt="Edit..." />
                </button>
                <button onClick={() => handleDelete(product.id)}>
                  <img src={Delete} alt="Delete..." />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
