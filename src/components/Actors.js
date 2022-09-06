import React from "react";
import { actors } from "../data";

// no id in data.js can i use index? 

function Actors() {

  const allActors = actors.map(
    (eachActor, actor) => {
      return (
        <div key={actor}>
          <h2>NAME: {eachActor.name}</h2>
          <p>MOVIES:</p>
          <ul>
            {eachActor.movies.map(
              (eachMovie, movie) => {
                return (
                    <li key={movie}>{eachMovie}</li>
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
      <h1>Actors Page</h1>
      {allActors}
    </div>

  );
}

export default Actors;
