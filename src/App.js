import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import TvShows from "./components/TvShows";
import Trending from "./components/Trends";
import Pricing from "./components/Pricing";

export const Container = React.createContext();

function App() {
  const [toggle, setToggle] = useState(true);
  const [inputValue, setInputValue] = useState("");

  return (
    <Container.Provider
      value={{ toggle, setToggle, inputValue, setInputValue }}
    >
      <div className="App">
        {/* REACT-ROUTER */}
        <Navbar />
        <Routes>
          {/* DEFAULT ROUTE */}
          <Route path="/" element={<Movies />} />
          <Route path="/TvShows" element={<TvShows />} />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/Pricing" element={<Pricing />} />
        </Routes>
      </div>
    </Container.Provider>
  );
}

export default App;
