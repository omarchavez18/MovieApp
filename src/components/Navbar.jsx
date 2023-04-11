import React, { Fragment, useContext } from "react";
import { HiSearch } from "react-icons/hi";
import { NavLink } from "react-router-dom";

import "../Styles/NavbarStyle.css";
import { Container } from "../App";

function Navbar() {
  const { toggle, setToggle, setInputValue } = useContext(Container);
  console.log(toggle);

  return (
    <Fragment>
      <nav className={toggle ? "" : "navBarColor"}>
        <div className="nav-options">
          <h1 id={toggle ? "" : "heading"}> REACTFLIX</h1>
          <NavLink
            to="/"
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
    </Fragment>
  );
}

export default Navbar;
