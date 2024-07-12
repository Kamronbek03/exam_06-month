import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddProduct.css";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    brand: "",
    price: "",
    priceInSale: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/products", formData)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div>
      <header>
        <h2>Новый товар</h2>
        <p>Главная / Товары / Новый товар</p>
      </header>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="all-contents">
          <button className="content">Основные</button>
          <div className="form-contents">
            <div className="border-contents">
              <div
                style={{ margin: "17px 0 30px 49px" }}
                className="form-group"
              >
                <label>
                  Название <span>*</span>
                </label>
                <input
                  className="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="neighbors">
                <div className="form-group">
                  <label>
                    Бренд <span>*</span>
                  </label>
                  <input
                    className="brand-code"
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    Артикул производителя <span>*</span>
                  </label>
                  <input
                    className="brand-code"
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div style={{ margin: "17px 0 5px 49px" }} className="form-group">
                <label htmlFor="textarea">
                  Описание <span>*</span>
                </label>
              </div>
            </div>
            <textarea
              id="textarea"
              rows={5}
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />

            <div className="form-bottom">
              <div className="form-group">
                <label>Цена</label>
                <input
                  className="number"
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Цена со скидкой</label>
                <input
                  className="number"
                  type="number"
                  name="priceInSale"
                  value={formData.priceInSale}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="save-btn">
            Сохранить
          </button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
