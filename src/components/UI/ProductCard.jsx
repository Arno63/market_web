import React from 'react'
import { motion } from 'framer-motion'
import '../../styles/product-card.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({item}) => {
  return (
    <Col lg='3' md='3' className='mb-3'>
        <div className="product__item">
        <div className="product__img">
            <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt="" />
        </div>
        <div className='p-2 product__info'>
              <h3 className="product__name">
                <Link to={`/shop/${item.id}`} style={{ textDecoration: 'none', color: 'inherit'}}>{item.productName}</Link>
              </h3>
            <span>{item.category}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">${item.price}</span>
            <motion.span whileHover={{scale: 1.1}}><i class="ri-add-line"></i></motion.span>
        </div>
    </div>
    </Col>
  )
}

export default ProductCard
