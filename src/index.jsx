import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from "./ContextAPI/CartContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <CartProvider>
      <App />
    </CartProvider>
  </Router>
);
