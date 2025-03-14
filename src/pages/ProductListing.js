import React from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../CartContext';
import './ProductListing.css';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'HP Pavilion', price: '$649', description: 'HP 15-inch with 16GB RAM 1TB SSD powered by Intel i7', image: 'image/hp1.jpg', category: 'Laptop' },
  { id: 2, name: 'Lenovo YOGA', price: '$450', description: 'Lenovo 15-inch with 8GB RAM 512GB SSD powered by Intel i7', image: 'image/lenovo.jpg', category: 'Laptop' },
  { id: 3, name: 'MacBook Air', price: '$1199', description: 'MacBook Air 13-inch with M2 chip', image: 'image/mac.jpg', category: 'Laptop' },
  { id: 4, name: 'Samsung Galaxy Tab', price: '$599', description: 'Samsung Galaxy Tab with 128GB storage', image: 'image/tab.jpg', category: 'Mobile' },
  { id: 5, name: 'iPhone 12', price: '$699', description: 'Apple iPhone 12 with 64GB storage', image: 'image/iphone.jpg', category: 'Mobile' },
  { id: 6, name: 'OnePlus 9', price: '$729', description: 'OnePlus 9 with 8GB RAM and 128GB storage', image: 'image/oneplus.jpg', category: 'Mobile' }
];

const ProductListing = () => {
  const { cart, addToCart } = useCart();
  const location = useLocation();

  // Retrieve the category from the query parameter
  const query = new URLSearchParams(location.search);
  const category = query.get('category');

  // Filter products based on category or display all if no category is selected
  const filteredProducts = category ? products.filter((product) => product.category === category) : products;

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  
  return (
    <div className="product-listing">
      {/* Header with Cart Count */}
      <header className="header">
        <nav className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/product">Products</Link>
          <Link to="/cart">Cart <span className="cart-count">{cart.length}</span></Link>
          <Link to="/checkout">Checkout</Link>
        </nav>
      </header>
      
      <h2>{category ? `${category} Products` : 'All Products'}</h2>
      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
