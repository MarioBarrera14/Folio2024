import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import sitrack from "../../Assets/Projects/sitrack.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Trabajos </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Space_invasión"
              description="Este es un juego simple de nave espacial en el que el usuario controla una nave y debe evitar ser golpeado por enemigos mientras dispara y destruye a los enemigos que se mueven por la pantalla."
              ghLink="https://github.com/MarioBarrera14/space_invasion"
              demoLink="https://space-invasion.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BLOC_Note"
              description="Esta es una aplicación web básica para administrar notas simples en la web utilizando tecnologías Javascript como Nodejs,Mongodb y otras tecnologías relacionadas.Técnicamente, esta es una aplicación de varias páginas que utiliza Handlebars como motor de plantillas."
              ghLink="https://github.com/MarioBarrera14/Bloc_d.e_notas_express_mongodb_js_hbs"
              demoLink="https://bloc-d-e-notas-express-mongodb-js-hbs.onrender.com/notes"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Carrito de compras"
              description="Esta aplicacion implementa un carrito de compras básico en una página web, permitiendo agregar productos, mostrar el total de la compra, vaciar el carrito y mostrar notificaciones al usuario."
              ghLink="https://github.com/MarioBarrera14/ventas_coder"
              demoLink="https://ventas-coder.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Ecomerce"
              description="Esta aplicacion proporciona la funcionalidad para agregar productos al carrito, mostrarlos en la interfaz de usuario, calcular el precio total de la compra, vaciar el carrito y mostrar el valor total de la compra al usuario."
              ghLink="https://github.com/MarioBarrera14/ProyectoFinalBarrera"
              demoLink="https://proyecto-final-barrera.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sitrack}
              isBlog={false}
              title="Simulador_gps"
              description="Este script genera informes de ubicación aleatoria y los envía al servidor SITRACK utilizando una autenticación basada en firma. El proceso se repite cada 60 segundos durante 5 minutos antes de detenerse."
              ghLink="https://github.com/MarioBarrera14/simulador_gps_virtual_sitrack"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="CRUD Nodejs"
              description="CRUD-hecho-con-Node.js, Express,TypeScript,TypeORM,EJS & amp y SQLite por @sinvalbsneto.
              Traducido al español y modificado por el equipo 2,'Oozma Kappa'."
              ghLink="https://github.com/MarioBarrera14/Final_2022_CRUD_Programacion2"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
