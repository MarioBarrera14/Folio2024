import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p
            style={{
              maxHeight: "550px",
              textAlign: "justify",
              maxWidth: "80%",
              margin: "0 auto",
            }}
          >
            Como programador Junior, soy proactivo y autodidacta, lo que me
            permite enfrentar desafíos con entusiasmo y aprender de manera
            independiente.
            <br />
            Estoy siempre dispuesto a asumir responsabilidades adicionales y
            colaborar en equipo para lograr los objetivos del proyecto. Además,
            tengo la capacidad de adaptarme rápidamente a los cambios y de
            resolver porblemas de manera efectiva.
            <br />
            <br />
            Mi enfoque orientado a resultados y mi actitud positiva me ayudan a
            mantenerme motivado y a aportar ideas creativas al equipo.
          </p>

          <footer className="blockquote-footer">MB</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
