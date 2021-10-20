import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";
import Header from "../Components/Header";

function About() {
  return (
    <>
      <div className="ab-bg">
        <Row>
          <Col>
            <Navbar collapseOnSelect expand="lg" variant="dark">
              <Container>
                <Navbar.Brand href="/" className="ois-text">
                  <img
                    src="Images/1.png"
                    width="80"
                    height="50"
                    className="d-inline-block align-center"
                    alt="ois_media logo"
                  />
                  OIS_MEDIA
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav ">
                  <Nav className="me-auto header-top"></Nav>
                  <Nav>
                    <ul>
                      <li className="links">
                        <Link to="/">Home</Link>
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

        <div className="ab-txt">
          <h1>ABOUT ME</h1>
          <p>
            I'd have loved to tell you more about me,
            <br /> so here are a few words about me; want to know more, feel
            free to hit me up!
          </p>
        </div>
      </div>

      <Container>
        <p class="ab-img">
          <img
            src="../Images/1.jpg"
            alt="John Wesley"
            width="350"
            height="480"
            align="right"
          />
          OIS_MEDIA is founded and owned By ODURO ISAAC SAPEY, Also Known As
          CHANTENG. A Student who has a very great passion and interest in
          Technology and the latest trends in the ICT world.<br /> Outside of my
          design works, I love to read, and for some time now, I’ve been
          practicing my writing (I hope it shows in this little piece). I also
          enjoy playing games, though projects and school don’t give me time to
          do it regularly.<br/> Your satisfaction is our priority.
          <b>oismediagh@gmail.com</b>
        </p>
      </Container>
    </>
  );
}

export default About;
