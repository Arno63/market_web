import React, {useState, useRef, useEffect} from 'react'

import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/products.detail.css'
import {motion} from 'framer-motion'
import ProductList from '../components/UI/ProductsList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'

const ProductDetails = () => {

  const [tab, setTab] = useState('desc');
  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);

  const { id } = useParams()
  const product = products.find((item) => item.id === id);

  
  const { imgUrl, productName, price, reviews, description ,avgRating, shortDesc, category} = product;
  
  const relatedProducts = products.filter(item=> item.category===category);

  const submitHandler =(e)=> {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    console.log(reviewObj);
    toast.success('Review submitted successfully')
  };

   const addToCart =()=>{
     dispatch(cartActions.addItem({
       id,
       productName,
       image: imgUrl,
       price,
     })
   );
     toast.success('Product add successfully')
 };

 useEffect(() => {
  window.scrollTo(0, 0);
 }, [product]);

  

  return <Helmet title={productName}>
    <CommonSection title={productName}/>

    <section className='pt-0'>
      <Container>
        <Row>
          <Col lg='6'>
            <img src={imgUrl} className='product-image' alt="" />
          </Col>
          <Col lg='6'>
            <div className="product__details">
              <h2>{productName}</h2>
              <div className="product__rating d-flex align-items-center gap-2 mb-3">
                <div className="d-flex align-items-center">
                  {[...Array(Math.floor(avgRating))].map((_, i) => (
                    <span key={i}><i className="ri-star-s-fill"></i></span>
                  ))}
                  {avgRating % 1 !== 0 && <span><i className="ri-star-half-fill"></i></span>}
                </div>
                <p className="mb-0 ms-2 text-muted">(<span>{avgRating}</span> ratings)</p>
              </div>

              <div className='d-flex align-items-center gap-5'>
              <span className='product__price'>${price.toFixed(2)}</span>
              <span>Category: {category.toUpperCase()}</span>
              </div>
              <p className='mt-3'>{shortDesc}</p>

              <motion.button whileTap={{scale: 1.2}} 
              className='buy__button' onClick={addToCart}>Add to cart</motion.button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12'>
                  <div className="tab__wrapper d-flex align-items-center gap-5">
                  <h6 className={`${tab === 'desc' ? 'active__tab' : ''}`} onClick={() => setTab('desc')}>Description</h6>
                    <h6 className={`${tab === 'rev' ? 'active__tab' : ''}`} onClick={() => setTab('rev')}>Reviews ({reviews.length})</h6>
                  </div>


                  {
                    tab==='desc' ? (
                       <div className="tab__content mt-4">
                        <p>{description}</p>
                      </div>
                    ) : (
                      <div className='product__review'>
                        <div className="review__wrapper">
                          <ul>
                          {
                              reviews?.filter((_, index) => index !== 0).map((item, index) => (
                                <li kew={index} className='mb-4'>
                                  <h6>Alex</h6>
                                  <span>{item.rating} (rating)</span>
                                  <p>{item.text}</p>
                                </li>
                              ))
                            }
                          </ul>

                          <div className="review__form">
                            <h4>Leave Your Experience</h4>
                            <form action="" onSubmit={submitHandler}>
                              <div className="form__group">
                                <input type="text" name='' id='' placeholder='Enter Name' ref={reviewUser} defaultValue="" required />
                              </div>

                              <div className="form__group d-flex align-items-center gap-5 rating__group"> 
                                <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(1)}>1<i class="ri-star-s-fill"></i></motion.span>
                                <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(2)}>2<i class="ri-star-s-fill"></i></motion.span>
                                <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(3)}>3<i class="ri-star-s-fill"></i></motion.span>
                                <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(4)}>4<i class="ri-star-s-fill"></i></motion.span>
                                <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(5)}>5<i class="ri-star-s-fill"></i></motion.span>
                              </div>

                              <div className="form__group">
                              <textarea ref={reviewMsg} rows={4} placeholder='Review Message ....' defaultValue="" required />
                              </div>

                              <motion.button type='submit' className='buy__button'>Submit</motion.button>
                            </form>
                          </div>
                        </div>
                      </div>
                    )
                  }

                 
          </Col>

          <Col lg='12'>
          <h3 className='related__title'>You might also like</h3>
          </Col>

          <ProductList data={relatedProducts}/>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default ProductDetails
