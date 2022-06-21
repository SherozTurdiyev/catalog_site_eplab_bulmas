import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Backet from "./Components/Backet/Backet";
import Messages from "./Components/Message/Message";
import Partness from "./Components/Partness/Partness";
import Products from "./Components/Products/Products";
import Category from "./Components/Category/Category";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/basket" element={<Backet />} />
          <Route path="/message" element={<Messages />} />
          <Route path="/partness" element={<Partness />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
