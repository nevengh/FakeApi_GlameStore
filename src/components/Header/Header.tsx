import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { useEffect, useState } from "react";

const Header = () => {
    const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // تحقق إذا كان هناك توكن
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);
   const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="Header">
      <div className="logo">
        <h2>
          Glame<span className="span-logo">Store</span>
        </h2>
      </div>

      <div className="header-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="header-btns">
        <div
          className="cart"
          onClick={() => document.body.classList.add("show-cart")}
        >
          <FaShoppingCart />
          <span>{totalItems}</span>
        </div>
         {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>
            Log out
          </button>
        ) : (
          <Link  className="logout-btn" to="/login">Log in</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
