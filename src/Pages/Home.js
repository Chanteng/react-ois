import React from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import Header from "../Components/Header";
import Typewriter from "../Components/Typewriter";

function Home() {
  return (
      <>
    <div className="homebg">
        <Header />
        <Typewriter />
    </div> 
    <Container>
    {/* <Row>
              <p className="card-txt">OUR SERVICES:</p>
            <Col md="3">
              <div className="d-flex justify-content-around">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="Images/b.jpg" />
                  <Card.Body>
                    <Card.Title>Banners</Card.Title>
                    <Card.Text>
                      We Design and Print Banners for Church, Funeral and many more...
                    </Card.Text>
                    <Button variant="primary">Order Now!</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col md="3">
              <div className="d-flex justify-content-around">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="Images/e.jpg" />
                  <Card.Body>
                    <Card.Title>T-Shirt Printing</Card.Title>
                    <Card.Text>
                     We Design and Print T-Shirts, Lascote, and others for Birthday, Church Programs and many more...
                    </Card.Text>
                    <Button variant="primary">Oder Now!</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col md="3">
              <div className="d-flex justify-content-around">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="Images/f.jpg" />
                  <Card.Body>
                    <Card.Title>Logo Branding</Card.Title>
                    <Card.Text>
                      Some quick example of what we do is Logo for Organizations such as School, Church and more...
                    </Card.Text>
                    <Button variant="primary">Order Now!</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col md="3">
              <div className="d-flex justify-content-around">
                <Card style={{ width: "18rem"  }}>
                  <Card.Img variant="top" src="Images/h.jpg" />
                  <Card.Body>
                    <Card.Title>Label and Stickers</Card.Title>
                    <Card.Text>
                      We design and print Label Branding such as Drinks, Pastries, Shower Gel, Water, and others for Organization, we also print Stickers for Organizations such as...
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row> */}
    </Container>
    </>
  );
}

export default Home;
