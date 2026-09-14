import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const queries = ['headphones', 'smart watch', 'backpack', 'speaker'];
      const results = await Promise.all(
        queries.map(async (query) => {
          const response = await fetch(
            `https://api.pexels.com/v1/search?query=${query}&per_page=1`,
            {
              headers: {
                Authorization: import.meta.env.VITE_PEXELS_API_KEY,
              },
            }
          );
          const data = await response.json();
          return {
            id: query,
            name: query,
            price: 49.99,
            image: data.photos[0]?.src.medium,
          };
        })
      );
      setProducts(results);
    }
    fetchProducts();
  }, []);

  function addToCart(product) {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  function increaseQuantity(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  return (
    <div>
      <Navbar cartCount={cart.length} onCartClick={() => setShowCart(!showCart)} />

      {showCart && (
        <Cart
          items={cart}
          onRemove={removeFromCart}
          onIncrease={increaseQuantity}
        />
      )}

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;