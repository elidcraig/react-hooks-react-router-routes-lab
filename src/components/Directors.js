import React from "react";
import { directors } from "../data";

function Directors() {
  const directorStuff = directors.map(director => {
    return (
      <div>{director.name}
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {directorStuff}
    </div>
  );
}

export default Directors;
