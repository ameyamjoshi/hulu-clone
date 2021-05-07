import React from "react";
import "./Navbar.css";
import requests from "./requests";

function Navbar({ setselectedoption }) {
  return (
    <div className="nav">
      <h2 onClick={() => setselectedoption(requests.fetchTrending)}>
        Trending
      </h2>
      <h2 onClick={() => setselectedoption(requests.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setselectedoption(requests.fetchAction)}>Action</h2>
      <h2 onClick={() => setselectedoption(requests.fetchComedy)}>Comedy</h2>
      <h2 onClick={() => setselectedoption(requests.fetchHorror)}>Horror</h2>
      <h2 onClick={() => setselectedoption(requests.fetchRomance)}>Romance</h2>
      <h2 onClick={() => setselectedoption(requests.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setselectedoption(requests.fetchScifi)}> Sci-fi</h2>
      <h2 onClick={() => setselectedoption(requests.fetchWestern)}>Western</h2>
      <h2 onClick={() => setselectedoption(requests.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setselectedoption(requests.fetchTrending)}>Movie</h2>
    </div>
  );
}

export default Navbar;
