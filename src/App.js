import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import MovieGrid from "./MovieGrid";
const baseUrl = "http://www.omdbapi.com/?apikey=e2e734e9&t=";

const App = () => {
  const [mydata, setMyData] = useState({});
  const [input, setInput] = useState("");
  const { Title, Poster, Released, Plot } = mydata;
  useEffect(() => {
    // prompt("Enter status code");
    axios.get(`${baseUrl}${input}`).then((response) => {
      setMyData(response.data);
    });
  }, [input]);
  return (
    <div className="main">
      <div className="branding">
        <h1 className="title">Movie Review</h1>
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/512/1101/1101762.png"
        />
      </div>
      <div className="search-box">
        <input
          className="search"
          type="text"
          placeholder="Search Your Favourite Movie"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
      </div>

      {input == "" ? (
        <MovieGrid />
      ) : (
        <MovieCard
          Title={Title}
          Poster={Poster}
          Released={Released}
          Plot={Plot}
        />
      )}
    </div>
  );
};

export default App;
