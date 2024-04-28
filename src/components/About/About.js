import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/fullstack.json";
import Toolstack from "./Toolstack";
import Lottie from "lottie-react";

function About() {
  return (
    <Container fluid className="about-section">
      
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Acerca <strong className="purple">De</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "20px" }}
            className="about-img"
          >
            <Lottie
        animationData={laptopImg}
        className="img-fluid" // Aplica la clase 'img-fluid' y 'lottie-animation'
      />
          </Col>
        </Row>
        <h1 className="project-heading">
          Habilidades <strong className="purple"> Profesionales </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Herramientas</strong> Que Utilizo
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
