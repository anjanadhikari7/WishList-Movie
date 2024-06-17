import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        if (isMounted) {
          setMovies(request.data.results || []);
        }
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [fetchUrl]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {Array.isArray(movies) &&
          movies.map((movie) => (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                (isLargeRow ? movie.poster_path : movie.backdrop_path) || ""
              }`}
              alt={movie.name || movie.title || movie.original_name}
            />
          ))}
      </div>
    </div>
  );
};

export default Row;
