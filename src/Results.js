import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import FlipMove from "react-flip-move";

import axios from "./axios";
import requests from "./requests";
function Results({ selectedoption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedoption);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedoption]);
  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
