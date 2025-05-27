import { FaTimes } from 'react-icons/fa';
import { useCart } from '../../../Context/CartContext';
import './CartSidebar.css';

const CartSidebar = () => {
  const { cartItems, increment, decrement } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-sidebar">
      <h3>Your Cart</h3>
      <FaTimes
        className="close-btn"
        onClick={() => document.body.classList.remove('show-cart')}
      />

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.title} />
              <div className="details">
                <h4>{item.title}</h4>
                <div className="qty-controls">
                  <button onClick={() => decrement(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increment(item.id)}>+</button>
                </div>
              </div>
            </div>
          ))}

          {/* ✅ عرض مجموع الطلبيات */}
          <div className="cart-total">
            <h4>Total: ${totalPrice.toFixed(2)}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
