import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { CartProvider } from "./ContextAPI/CartContext";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (
    <>
      <div className="App">
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </CartProvider>
      </div>
    </>
  )
}

export default App