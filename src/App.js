import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import requests from "./requests";
import Results from "./Results";

function App() {
  const [selectedoption, setselectedoption] = useState(requests.fetchTrending);
  return (
    <div className="app">
      <Header />

      <Navbar setselectedoption={setselectedoption} />

      <Results selectedoption={selectedoption} />
    </div>
  );
}

export default App;
