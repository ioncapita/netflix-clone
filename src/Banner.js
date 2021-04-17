import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  const handleTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(() => console.log("Temporarily unavailable"));
    }
  };

  const close__trailer = () => {
    const close = document.querySelector(".close");
    const trailer = document.querySelector(".movieTrailer__large");
    trailer.style.visibility = "hidden";
    trailer.style.opacity = 0;
  };
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center, center",
      }}
    >
      <div className="banner__contents inf">
        <h1 className="banner__title inf">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons inf ">
          <button
            onClick={() => handleTrailer(movie)}
            className="banner__button inf"
          >
            Play
          </button>
          {trailerUrl && (
            <div className="movieTrailer__large">
              <div className="movieTrailer__close">
                <img
                  onClick={close__trailer}
                  className="movieTrailer__button"
                  src="https://image.flaticon.com/icons/png/512/109/109602.png"
                  alt=""
                />
              </div>

              <YouTube className="youtube__video" videoId={trailerUrl} />
            </div>
          )}

          <button className="banner__button inf">More info</button>
        </div>
        <h1 className="banner__disc inf">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
