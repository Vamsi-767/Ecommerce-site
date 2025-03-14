import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import './Home.css'; // Reuse existing CSS for consistency

const Checkout = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0).toFixed(2);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    creditCard: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    // You could integrate payment gateways or handle the order processing here
  };

  return (
    <div className="checkout">
    <header className="header">
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  
    <h1>Checkout</h1>
  
    {/* Cart Summary */}
    <div className="cart-summary">
      <h2>Order Summary</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Please add items to proceed with checkout.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
            </div>
          ))}
          <h3>Total Price: ${totalPrice}</h3>
        </div>
      )}
    </div>
  
    {/* Shipping Information Form */}
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Shipping Information</h2>
      <div className="form-field">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="address">Shipping Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
  
      {/* Payment Information */}
      <div className="form-field">
        <label htmlFor="creditCard">Credit Card Number</label>
        <input
          type="text"
          id="creditCard"
          name="creditCard"
          value={formData.creditCard}
          onChange={handleInputChange}
          required
        />
      </div>
  
      <button type="submit" className="checkout-btn">Place Order</button>
    </form>
  </div>
  
  );
};

export default Checkout;