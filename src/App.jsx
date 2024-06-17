// src/App.js
import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Row from "./Components/Row";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl="/api/fetchNetflixOriginals"
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl="/api/fetchTrending" />
      <Row title="Top Rated" fetchUrl="/api/fetchTopRated" />
      <Row title="Action Movies" fetchUrl="/api/fetchActionMovies" />
      <Row title="Comedy Movies" fetchUrl="/api/fetchComedyMovies" />
      <Row title="Horror Movies" fetchUrl="/api/fetchHorrorMovies" />
      <Row title="Romance Movies" fetchUrl="/api/fetchRomanceMovies" />
      <Row title="Documentaries" fetchUrl="/api/fetchDocumentaries" />
    </div>
  );
};

export default App;
