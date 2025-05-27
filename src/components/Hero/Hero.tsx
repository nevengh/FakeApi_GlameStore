import { FaArrowDownShortWide } from 'react-icons/fa6'
import './Hero.css'
import { Link } from 'react-router-dom'
import { GiFastArrow } from 'react-icons/gi'

const Hero = () => {
  return (
    <div className='Hero'>
      <div className="hero-title">
        <h1>
          Elevate Your Wardrobe<br/> With Trendy Fashion<br/> From <span>GlamStore</span>
        </h1>
        <Link to='/contact'>Let's Talk <span><GiFastArrow/></span></Link>
      </div>
    </div>
  )
}

export default Hero