import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";

import "../Styles/Videos.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import NoImg from "./noImg.jpg";
import TrailerMovies from "../Trailers/TrailerMovies";
import { Container } from "../App";

function Movies() {
  const { toggle, inputValue } = useContext(Container);
  const input = inputValue;
  const [moviesData, setMoviesData] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const [movieTitle, setMovieTitle] = useState("");
  const Shown = input ? "search" : "discover";

  // check the api on the website
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`;

  // check the way you can return img on the website
  const Images = "https://image.tmdb.org/t/p/w500";

  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "d1f2c1eb9f199e4d9590b48cac5853bc",
        query: input,
      },
    });

    const results = data.data.results;
    setMoviesData(results);
  };

  useEffect(() => {
    setTimeout(() => {
      MovieCall();
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  const MoviesTitle = (movie) => {
    setMovieTitle(movie.title);
    setTrailer(!trailer);
  };

  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {moviesData.map((movie, i) => {
            return (
              <Fragment key={i}>
                <div id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle
                    color="white"
                    fontSize={40}
                    id={trailer ? "playIcon" : "hide"}
                    onClick={() => MoviesTitle(movie)}
                  />
                  <img
                    src={
                      movie.poster_path
                        ? `${Images}${movie.poster_path}`
                        : NoImg
                    }
                    alt=""
                    onClick={() => MoviesTitle(movie)}
                  />

                  <h3
                    id={movie.title.length > 28 ? "smaller-Text" : ""}
                    className={toggle ? "mainColor" : "secondaryColor"}
                    onClick={() => MoviesTitle(movie)}
                  >
                    {movie.title}
                  </h3>
                </div>
              </Fragment>
            );
          })}

          {trailer ? null : (
            <TrailerMovies moviesTitle={movieTitle} toggle={toggle} />
          )}
          <AiOutlineClose
            id={trailer ? "Nothing" : "Exit1"}
            className={toggle ? "DarkTheme" : "LightThemeClose"}
            fontSize={55}
            color="white"
            cursor="pointer"
            onClick={() => setTrailer(true)}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Movies;
