import React from "react";
import data from "./Data.js";
import "./MovieGrid.css";

import MovieCard from "./MovieCard";
// const Data = {
//   Title: "Baazigar",
//   Poster:
//     "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3OTE1MDAxNV5BMl5BanBnXkFtZTgwNjM1NDk5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg",
//   Released: "1993",
//   Plot: "Hellow ghgj",
// };

const MovieGrid = () => {
  return (
    <div className="grid">
      {data.map((movie) => {
        return (
          <MovieCard
            Title={movie.title}
            Poster={movie.posterurl}
            Released={movie.year}
            Plot={movie.storyline.slice(0, 100)}
          />
        );
      })}
    </div>
  );
};

export default MovieGrid;
