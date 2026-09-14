import './Navbar.css';
import logo from './assets/logo.png';


function Navbar({ cartCount, onCartClick }) {
  return (
    <nav>
      <img src={logo} alt="Elfy Logo" className="logo" />
      <input
        type="text"
        className="search-bar"
        placeholder="Search products..."
      />
      <div className="nav-links">
        <a href="#account">👤Account</a>
        <a href="#categories">Categories</a>
        <button className="cart-btn" onClick={onCartClick}>
          🛒 Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
}

export default Navbar;