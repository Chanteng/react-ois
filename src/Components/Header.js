import React from "react";
import {Link} from "react-router-dom"
import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <div>
        <Row>
          <Col>
            <Navbar collapseOnSelect expand="lg" variant="dark">
              <Container>
                <Navbar.Brand href="/" className="ois-text">
                <img src="Images/1.png" width="80" height="50" className="d-inline-block align-center" alt="ois_media logo" />
                  OIS_MEDIA
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav ">
                  <Nav className="me-auto header-top"></Nav>
                  <Nav >
                    <ul>
                      <li className="links">
                        <Link to="/" >Home</Link>
                      </li>
                      <li>
                        <Link to="/services">Services</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Header;
