import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import Cart from './pages/cart';
import Checkout from './pages/Checkout';
import SignUp from './pages/signup';
import Prac from './pages/Prac';


function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/Prac" element={<Prac/>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;