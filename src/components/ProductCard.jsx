import './ProductCard.css' ;

function ProductCard({name, price, image, onAddToCart}){
    return (
        <div classname="product-card">
            <img src={image} alt={name} className="product-image"/>
            <h3 className="product-name">{name}</h3>
            <p className="product-price">${price}</p>
            <button className="add-to-cart-button" onClick={onAddToCart}>Add to Cart</button>
        </div>
    );
}
export default ProductCard;