import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const movie_url = "https://image.tmdb.org/t/p/original/";
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  console.log(movies);

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
    const trailer = document.querySelector(".movieTrailer__large");
    trailer.style.visibility = "hidden";
    trailer.style.opacity = 0;
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                onClick={() => handleTrailer(movie)}
                src={`${movie_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>

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
    </div>
  );
}

export default Row;
