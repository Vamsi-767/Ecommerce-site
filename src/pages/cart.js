import React from 'react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import './Home.css';
import './cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')) * item.quantity, 0).toFixed(2);

  return (
    <div>
      {/* Header with Cart Count */}
      <header className="header">
        <nav className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/product">Products</Link>
          <Link to="/cart">Cart <span className="cart-count">{cart.length}</span></Link>
          <Link to="/checkout">Checkout</Link>
        </nav>
      </header>

      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {/* Displaying items in the cart */}
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
              <h3>{product.name}</h3>
              <p>Price: {product.price} x {product.quantity}</p>
              <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
            </div>
          ))}
          <h2>Total Price: ${totalPrice}</h2>

          {/* Checkout Button at the bottom */}
          <div className="checkout-btn-container">
            <Link to="/checkout">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
