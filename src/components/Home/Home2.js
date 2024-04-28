import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Mb.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            <span className="purple"> PERMÍTANME </span>  CONTARLES UN POCO
            </h1>
            <p className="home-about-body">
            Mi pasión por la programación me impulsa a buscar constantemente nuevas habilidades y conocimientos.
              <br />
              <br />
              Mi campo de interés abarca la construcción de nuevas &nbsp;
              <i>
                <b className="purple">tecnologías y productos web. </b>                
              </i>
              <br />
              <br />
              Siempre que puedo, aplico mi pasión por desarrollar productos utilizando 
              <b className="purple"> Node.js </b> y
              <i>
                <b className="purple">
                  {" "}
                  las bibliotecas-frameworks de JavaScript más modernos,
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js y Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid " alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2>PODES ENCONTRARME EN</h2>
            <p>
              No <span className="purple"> dudes </span> en contactarme
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MarioBarrera14"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mario-javier-ariel-barrera-801660129/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/javi_mario69/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
