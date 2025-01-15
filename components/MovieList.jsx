import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=957fac8e&s=batman")
    .then((res)=> res.json())
    .then((data)=> {
      setMovies(data.Search)
      console.log(data.Search)
      setLoading(false)
    })
    .then((err)=> {
      console.log(err)
    })
  }, []);


    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      );
    }
  
  
    return (
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    );
  }

export default MovieList;