import React from "react";
import { movies } from "../data";

function Movies() {

  let allMovies = movies.map(
    (eachMovie, movie) => {
      return (
        <div key={movie}>
          <h2>Title: {eachMovie.title}</h2>
          <p>Time: {eachMovie.time} min</p>
          <p>Genres:</p>
          <ul>
            {eachMovie.genres.map(
              (eachGenre, genre) => {
                return (
                    <li key={genre}>{eachGenre}</li>
                );
              }
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <div>
      <h1>Movies Page</h1>
      {allMovies}
    </div>
  );
}

export default Movies;
