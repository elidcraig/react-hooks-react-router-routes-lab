import React from "react";
import { movies } from "../data";

function Movies() {
  const movieStuff = movies.map(movie => {
    return (
      <div>{movie.title}, {movie.time}mins
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {movieStuff}
    </div>
  );
}

export default Movies;
