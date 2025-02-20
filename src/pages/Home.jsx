import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'

import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import ProductsList from '../components/UI/ProductsList'

import Clock from '../components/UI/Clock'


import counterImg from '../assets/images/counter-timer-img.png'
import products from '../assets/data/products'
import Services from '../Services/Services'



const Home = () => {



  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWireslessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  
  const year = new Date().getFullYear();

  useEffect(()=>{
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair");

        const filteredBestSalesProducts = products.filter(
          (item) => item.category === "sofa");

        const filteredMobileProducts = products.filter(
          (item) => item.category === "mobile");

        const filteredWirelessProducts = products.filter(
          (item) => item.category === "wireless");

        const filteredPopularProducts = products.filter(
          (item) => item.category === "watch");

      setTrendingProducts(filteredTrendingProducts);
      setBestSalesProducts(filteredBestSalesProducts);
      setMobileProducts(filteredMobileProducts);
      setWireslessProducts(filteredWirelessProducts);
      setPopularProducts(filteredPopularProducts);
  },[]);

  return (<Helmet title={'Home'}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">Trending Product in {year}</p>
              <h2>Make Your Interior More Minimalist & Modern</h2>
              <p>lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Quaerat nulla repellat quo eaque alias corporis
                sun, facilis nesciunt rem fugit! </p>
                
                <motion.button whileTap={{scale: 1.2}} className="shop__btn" ><Link to='/shop' style={{ textDecoration: 'none', color: 'inherit'}}>Shop Now</Link></motion.button>
            </div>
          </Col>

          <Col lg='6' md='6' >
          <div className="hero__img">
            <img src={heroImg} alt="" />
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Services />
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg="12">
            <h2 className="section__title">Trending Product</h2>
          </Col>
          <ProductsList data={trendingProducts} />
        </Row>
      </Container>
    </section>

    <section className="best__sales">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section__title">Best Sales</h2>
          </Col>
          <ProductsList data={bestSalesProducts} />
        </Row>
      </Container>
    </section>

    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='6'>
          <div className="clock__top-content">
            <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
            <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
          </div>
            <Clock/>

            <motion.button whileTap={{scale: 1.2}} className="shop__btn store__btn">
              <Link to='/shop' style={{ textDecoration: 'none', color: 'inherit'}}>Visit Store</Link>
            </motion.button>
          </Col>
          <Col lg='6' md='6' className='text-end'>
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="new__arrival">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section__title">New Arrivals</h2>
          </Col>
          <ProductsList data={mobileProducts} />
          <ProductsList data={wirelessProducts} />
        </Row>
      </Container>
    </section>

    <section className="popular__category">
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-3'>
            <h2 className="section__title">Popular in Category</h2>
          </Col>
          <ProductsList data={popularProducts} />
        </Row>
      </Container>
    </section>
  </Helmet>)
}

export default Home
