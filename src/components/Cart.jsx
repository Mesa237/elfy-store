import './Cart.css';

function Cart({ items, onRemove, onIncrease }) {
  return (
    <div className="cart-panel">
      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        items.map((item) => (
          <div className="cart-row" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <span className="cart-item-name">{item.name}</span>
            <span className="cart-item-price">${item.price}</span>
            <button className="qty-btn" onClick={() => onIncrease(item.id)}>+</button>
            <span className="cart-item-qty">{item.quantity}</span>
            <button className="delete-btn" onClick={() => onRemove(item.id)}>🗑️</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;