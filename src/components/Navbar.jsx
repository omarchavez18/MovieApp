import React, { Fragment, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { Routes, Route, NavLink } from "react-router-dom";
import Movies from "./Movies";
import TvShows from "./TvShows";
import Trending from "./Trends";
import Pricing from "./Pricing";
import "../Styles/NavbarStyle.css";

export const Container = React.createContext();

function Navbar() {
  const [toggle, setToggle] = useState(true);
  const [inputValue, setInputValue] = useState("");
  console.log(toggle);
  return (
    // this below is about useContext()
    <Container.Provider value={{ toggle, inputValue }}>
      <Fragment>
        <nav className={toggle ? "" : "navBarColor"}>
          <div className="nav-options">
            <h1 id={toggle ? "" : "heading"}> REACTFLIX</h1>
            <NavLink
              to=""
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "#EE9B00" };
              }}
            >
              <span id={toggle ? "movies" : "MoviesLight"}>Movies</span>
            </NavLink>

            <NavLink
              to="/TvShows"
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "#EE9B00" };
              }}
            >
              <span id={toggle ? "movies" : "MoviesLight"}>Tvshows</span>
            </NavLink>

            <NavLink
              to="/Trending"
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "#EE9B00" };
              }}
            >
              <span id={toggle ? "movies" : "MoviesLight"}>Trends</span>
            </NavLink>

            <NavLink
              to="Pricing"
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "#EE9B00" };
              }}
            >
              <span id={toggle ? "movies" : "MoviesLight"}>Pricing</span>
            </NavLink>
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Search Whatever You Want"
              // e.target.value hace referencia al mismo lugar donde el evento se dispara en este caso seria el input y el value seria el texto que ingresen
              onChange={(e) => setInputValue(e.target.value)}
            />
            <HiSearch fontSize={21} color="black" id="search" />
            <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
              <div
                id={toggle ? "Color-switcher-mover" : "Color-switcher-moved"}
              ></div>
            </div>
          </div>
        </nav>

        {/* REACT-ROUTER */}
        <Routes>
          <Route path="" element={<Movies />} />
          <Route path="TvShows" element={<TvShows />} />
          <Route path="Trending" element={<Trending />} />
          <Route path="Pricing" element={<Pricing />} />
        </Routes>
      </Fragment>
    </Container.Provider>
  );
}

export default Navbar;
