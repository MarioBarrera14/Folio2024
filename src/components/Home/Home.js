import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/coding.json";
import Lottie from 'lottie-react';
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
  
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hola!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Soy
                <strong className="main-name"> Mario Barrera</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "20px" }}
            className="about-img"
          >
            <Lottie
        animationData={homeLogo}
        className="img-fluid" // Aplica la clase 'img-fluid' y 'lottie-animation'
      />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
