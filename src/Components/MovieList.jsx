// src/components/MovieList.js
import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./MovieList.css";

const movies = [
  { id: 1, title: "Movie 1", image: "https://via.placeholder.com/200x300" },
  { id: 2, title: "Movie 2", image: "https://via.placeholder.com/200x300" },
  { id: 3, title: "Movie 3", image: "https://via.placeholder.com/200x300" },
  // Add more movies here
];

const MovieList = () => {
  return (
    <Row className="movie-list">
      {movies.map((movie) => (
        <Col key={movie.id} xs={6} md={4} lg={3}>
          <Card className="movie-card">
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
