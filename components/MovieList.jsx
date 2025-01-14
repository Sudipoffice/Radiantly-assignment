import { Link } from 'react-router-dom';
import { useMovieContext } from '../src/context/MovieContext';
import MovieCard from './MovieCard';

function MovieList() {
    const { movies, loading, error } = useMovieContext();
  
    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="text-center text-red-600 p-4">
          {error}
        </div>
      );
    }
  
    return (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }

export default MovieList;