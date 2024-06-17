// src/App.js
import React from "react";
import { Container } from "react-bootstrap";
import AppNavbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import MovieList from "./Components/MovieList";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Hero />
      <Container>
        <MovieList />
      </Container>
    </div>
  );
}

export default App;
