import './ProductBox.css';
import { FaLink, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../../../Context/CartContext';


const ProductBox = ({ id, rate, img, category, title, desc, price }) => {
  const { addToCart } = useCart();

  return (
    <div className='ProductBox'>
      <div className="top-box">
        <div className="rate-section">
          <p>{id % 2 === 0 ? "new" : ""}</p>
          <p><FaStar /> {rate}</p>
        </div>
        <img src={img} alt={title} />
        <Link to={`/product/${id}`}><FaLink className='link-icon' /></Link>
      </div>
      <p className="category">{category}</p>
      <h4>{title}</h4>
      <p className="desc">{desc.slice(0, 70)}{desc.length > 70 ? "..." : ""}</p>
      <div className="bottom-row">
        <p className="price">$ {price}</p>
        <button className="add-btn" onClick={() => addToCart({ id, rate, img, category, title, desc, price })}>+</button>
      </div>
    </div>
  );
};

export default ProductBox;
