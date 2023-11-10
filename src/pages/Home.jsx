import { useEffect, useState } from "react";
import MovieCard from '../components/MovieCard'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTopRatedMovies = async (url) => {
    setLoading(true)
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);

    setLoading(false);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>       
      <div className="movies-container">
        {loading ? (
          <div>carregando filmes</div>
        ) : (
          topMovies.length > 0 &&
          topMovies.map((movies) => <MovieCard key={movies.id} movie={movies} />)
        )}
      </div>
    </div>
  );
};

export default Home;
