import { Routes, Route, Navigate } from 'react-router-dom'


import Home from '../pages/Home'
import Login from '../pages/Login'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import ProductDetails from '../pages/ProductDetails'
import Signup from '../pages/Signup'

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='home'/>} />
    <Route path='home' element={<Home/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='checkout' element={<Checkout/>}/>
    <Route path='shop/:id' element={<ProductDetails/>}/>
    <Route path='signup' element={<Signup/>}/>
  </Routes>
}

export default Routers
