// src/components/Hero.js
import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <Jumbotron fluid className="hero">
      <Container>
        <h1>Welcome to Movie Wishlist</h1>
        <p>Your personal movie collection</p>
      </Container>
    </Jumbotron>
  );
};

export default Hero;
