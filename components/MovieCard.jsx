import React from "react"
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
    return (
      <Link target="_blank" to={`https://www.imdb.com/title/${movie.imdbID}`}>
        <div className="bg-white h-full rounded-lg shadow-md overflow-hidden transition transform hover:scale-105">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-fit object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{movie.Title}</h2>
            <div className="flex flex-col gap-2">
              <span className="text-gray-600">Released: {movie.Year}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

export default MovieCard;