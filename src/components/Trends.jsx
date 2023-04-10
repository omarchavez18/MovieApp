import React, { Fragment, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineClose, AiFillPlayCircle } from "react-icons/ai";
import { Container } from "./Navbar";
import NoImg from "./noImg.jpg";
import "../Styles/Videos.css";
import TrailerTrending from "../Trailers/TrailerTrending";

function Trends() {
  const { toggle, inputValue } = useContext(Container);
  const input = inputValue;
  const [trailer, setTrailer] = useState(true);
  const Api = "https://api.themoviedb.org/3";
  const TrendsShown = "/trending/all/week";
  const [trendArray, setTrendArray] = useState([]);
  const [trendTitle, setTrendTitle] = useState("");
  const Images = "https://image.tmdb.org/t/p/w500";

  const Trends = async () => {
    const data = await axios.get(`${Api}${TrendsShown}`, {
      params: {
        api_key: "d1f2c1eb9f199e4d9590b48cac5853bc",
        query: input,
      },
    });
    const results = data.data.results;
    setTrendArray(results);
  };

  useEffect(() => {
    setTimeout(() => {
      Trends();
    }, 100);
  }, [input]);

  const TrendTitle = (trend) => {
    setTrendTitle(trend.title);
    setTrailer(!trailer);
  };

  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className={"movies-container"}>
          {trendArray.map((trend) => {
            return (
              <Fragment key={trend.id}>
                <div id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle
                    color="white"
                    fontSize={40}
                    id={trailer ? "playIcon" : "hide"}
                    onClick={() => TrendTitle(trend)}
                  />
                  <img
                    src={
                      trend.poster_path
                        ? `${Images}${trend.poster_path}`
                        : NoImg
                    }
                    alt=""
                    onClick={() => TrendTitle(trend)}
                  />
                  <h3
                    id="smaller-Text"
                    className={toggle ? "mainColor" : "secondaryColor"}
                  >
                    {trend.title}
                  </h3>
                </div>
              </Fragment>
            );
          })}
          {trailer ? null : (
            <TrailerTrending TrendsTitle={trendTitle} toggle={toggle} />
          )}
          <AiOutlineClose
            id={trailer ? "Nothing" : "Exit1"}
            className={toggle ? "DarkTheme" : "LightThemeClose"}
            fontSize={55}
            color="#fff"
            cursor="pointer"
            onClick={() => setTrailer(true)}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Trends;
