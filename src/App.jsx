import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProductPage from "./pages/ProductPage";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/editproduct/:id" element={<EditProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
