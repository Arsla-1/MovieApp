import React from "react";
import "./MovieCard.css";

const MovieCard = ({ Title, Poster, Released, Plot }) => {
  return (
    <div className="movie-card">
      <div className="movie-img-box">
        <img className="poster" src={Poster} />
      </div>
      <div className="movie-details">
        <h1 className="movie-title">{Title}</h1>
        <p className="movie-year">{Released}</p>
        <p className="movie-summary">{Plot}</p>
      </div>
    </div>
  );
};

export default MovieCard;
