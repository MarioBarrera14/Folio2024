import React from "react";
import Particles from "react-tsparticles";
import particleConfig from "./config/particle-config"; // Importa el archivo JSON aquí

const ParticleBackground = () => {
  return (
    <Particles params={particleConfig}></Particles>
  );
};

export default ParticleBackground;
