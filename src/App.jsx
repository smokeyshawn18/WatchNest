import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./assets/search.svg";
import MovieCard from "./MovieCard";

// API URL
const API_URL = "http://www.omdbapi.com/?apikey=cbd4359e";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const searchMovie = async (title) => {
    setLoading(true); // Start loading
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search || []); // Handle cases where `data.Search` is undefined
    setLoading(false); // End loading
  };

  useEffect(() => {
    searchMovie("Avengers"); // Initial search
  }, []);

  return (
    <>
      <div className="app">
        <h1>WatchNest - Search Movies Frequently</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovie(searchTerm)}
          />
        </div>

        {loading ? (
          <div className="loading">Loading...</div>
        ) : movies.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID} // Added key prop here
                movie={movie}
              />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
