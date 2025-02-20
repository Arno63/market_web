import React, {useRef, useEffect} from 'react'
import './header.css'
import { Container, Row } from "reactstrap"

import {motion} from 'framer-motion'

import logo from '../../assets/images/eco-logo.png'
import { NavLink } from 'react-router-dom'
import userIcon from '../../assets/images/user-icon.png'

const nav__links = [
    {
        path:'home',
        display: 'Home'
    },
    {
        path:'shop',
        display: 'Shop'
    },
    {
        path:'cart',
        display: 'Cart'
    },
]

const Header = () => {

    const headerRef = useRef(null);

    const menuref = useRef(null)

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop
                > 80){
                    headerRef.current.classList.add('sticky__header')
                } else{
                    headerRef.current.classList.remove('sticky__header')
                }
        })
    }

    useEffect(() => {
        stickyHeaderFunc()

        return () => window.removeEventListener('scroll', stickyHeaderFunc)
    })


    const menuToggle = ()=> menuref.current.classList.toggle('active__menu')
  return <header className="header" ref={headerRef}>
    <Container>
        <Row>
            <div className="nav__wrapper">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <div>
                        <h1>Putra Mebel</h1>
                    </div>
                </div>
                
                <div className="navigation" ref={menuref} onClick={menuToggle}>
                    <ul className="menu">
                        {nav__links.map((item, index) => (
                            <li className='nav__item' key={index} >
                                <NavLink to={item.path} className={(navClass)=> navClass.isActive ? 'nav__active' : '' } >{item.display}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="nav__icons">

                    <span className='fav__icon'>
                        <i class="ri-heart-line"></i>
                        
                    </span>
                    <span className="cart__icon">
                        <i class="ri-shopping-bag-line"></i>
                        
                    </span>

                    <span>
                        <motion.img whileTap={{scale: 1.3}} src={userIcon} alt="" />
                    </span>
                    <div className="mobile__menu">
                        <span onClick={menuToggle}>
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </div>
        </Row>
    </Container>
  </header>
}

export default Header
