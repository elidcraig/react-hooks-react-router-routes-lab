import React from "react";
import { actors } from "../data";

function Actors() {
  const actorStuff = actors.map(actor => {
    return (
      <div>{actor.name}
        <ul>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })
  return (
  <div>
    <h1>Actors Page</h1>
    {actorStuff}
  </div>
  );
}

export default Actors;
