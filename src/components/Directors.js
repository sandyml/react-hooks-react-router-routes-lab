import React from "react";
import { directors } from "../data";

function Directors() {

  const allDirectors = directors.map(
    (eachDirector, director) => {
      return (
        <div key={director}>
          <h2>Name: {eachDirector.name}</h2>
          <p>Movies:</p>
          <ul>
            {eachDirector.movies.map(
              (eachMovie, show) => {
                return (
                  <li key={show}>{eachMovie}</li>
                
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
      {/* console.log("works in Director") */}
      <h1>Directors Page</h1>
      {allDirectors}
    </div>
  );
}

export default Directors;
