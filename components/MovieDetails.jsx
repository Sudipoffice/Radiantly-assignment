import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMovieContext } from '../src/context/MovieContext';

function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { movies } = useMovieContext();
    const [movie, setMovie] = useState(null);
  
    useEffect(() => {
      const foundMovie = movies.find(m => m.id === parseInt(id));
      if (foundMovie) {
        setMovie(foundMovie);
      }
    }, [id, movies]);
  
    if (!movie) {
      return (
        <div className="text-center p-4">
          Movie not found
        </div>
      );
    }
  
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              src={movie.poster || `https://via.placeholder.com/300x450?text=${encodeURIComponent(movie.title)}`}
              alt={movie.title}
              className="h-96 w-full object-cover md:w-96"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/300x450?text=${encodeURIComponent(movie.title)}`;
              }}
            />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                <span>{movie.rating}/10</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">Released: {movie.release_date}</p>
            <div className="mb-4">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
                {movie.genre}
              </span>
            </div>
            <div className="border-t pt-4">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{movie.description}</p>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Additional Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Duration</p>
                  <p className="font-medium">{movie.duration} minutes</p>
                </div>
                <div>
                  <p className="text-gray-600">Language</p>
                  <p className="font-medium">{movie.language}</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate(-1)}
              className="mt-8 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
            >
              Back to List
            </button>
          </div>
        </div>
      </div>
    );
  }
  

export default MovieDetails;