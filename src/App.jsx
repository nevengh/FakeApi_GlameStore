import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import ProductProfile from './pages/ProductProfile/ProductProfile'
import CartSidebar from './components/shared/CartSidebar/CartSidebar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter basename='/FakeApi_GlameStore/'>
        <Header/>
        <CartSidebar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/product/:id' element={<ProductProfile/>} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App