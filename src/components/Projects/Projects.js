import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              title="BLOC"
              description="Bloc de Notas"
              ghLink="https://github.com/MarioBarrera14/Bloc_d.e_notas_express_mongodb_js_hbs"
              demoLink="https://bloc-d-e-notas-express-mongodb-js-hbs.onrender.com/notes"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Carrito de compras"
              description="Ref"
              ghLink="https://github.com/MarioBarrera14/ventas_coder"
              demoLink="https://ventas-coder.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Ref."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Ref."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
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
