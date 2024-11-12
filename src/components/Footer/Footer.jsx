import React from 'react'
import './footer.css'

import { Container, Row,Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'


const year = new Date().getFullYear()
const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>

        <Col lg='4'>
          <div className="logo">
              <div>
                <h1 className='text-white'>Putra Mebel</h1>
              </div>
          </div>
          <p className="footer__text mt-4">
            lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Quaerat nulla repellat quo eaque alias corporis
            sun, facilis nesciunt rem fugit!
          </p>
        </Col>

        <Col lg='3'>
          <div className="footer__quick-links">
            <h4 className='quick__links-title'>Top Categories</h4>
            <ListGroup className='mb-2'>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#' style={{textDecoration: 'none'}}>Mobile Phones</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'> 
                <Link to='#' style={{textDecoration: 'none'}}>Modern Sofa</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#' style={{textDecoration: 'none'}}>Arm Chair</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#' style={{textDecoration: 'none'}}>Smart Watch</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='2'>
        <div className="footer__quick-links">
            <h4 className='quick__links-title'>Useful Links</h4>
            <ListGroup className='mb-2'>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop' style={{textDecoration: 'none'}}>Shop</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'> 
                <Link to='/cart' style={{textDecoration: 'none'}}>Cart</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/login' style={{textDecoration: 'none'}}>Login</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#' style={{textDecoration: 'none'}}>Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='3'>
        <div className="footer__quick-links">
            <h4 className='quick__links-title'>Contact</h4>
            <ListGroup className='footer__contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                <p>Jl. Bantaran, Krajan, Leces, Kec. Leces, Kabupaten Probolinggo, Jawa Timur 67273</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'> 
                <span>
                  <i class="ri-phone-line"></i>
                </span>
                  <p>+62 896-5514-8033</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span>
                  <i class="ri-mail-line"></i>
                </span>
                  <p>arnopurboyo63@gmail.com</p>
              </ListGroupItem>

            </ListGroup>
          </div>
        </Col>

        <Col lg='12'>
          <p className="footer__copyright">Copyright {year} developed by arno. All rights reserved{" "}</p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer
