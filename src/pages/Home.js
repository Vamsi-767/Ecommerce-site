// src/pages/Home.js

import React from 'react';
import './Home.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to the E-commerce Store</h1>
          <p>Shop the best deals on top brands!</p>
          <Link to="/product" className="shop-now-btn">Shop Now</Link>
          {/* Sign Up Button */}
        <Link to="/SignUp">
          <button className="signup-btn">Sign Up</button>
        </Link>
        </div>
      </section>

      {/* Header Position */}
      <header className="header">
        <nav className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/product">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
        </nav>
      </header>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-links">
          <Link to="/product?category=Laptop" className="category">Laptops</Link>
          <Link to="/product?category=Mobile" className="category">Mobiles</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;