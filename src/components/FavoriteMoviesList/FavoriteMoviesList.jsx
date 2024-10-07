// отображает список избранных фильмов
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { removeMovie, clearMovies } from "../../movie/favoriteMoviesSlice";
import "./favoriteMoviesList.css";

const FavoriteMoviesList = () => {
  const movies = useSelector((state) => state.favoriteMovies.movies); // выбирает массив фильмов из секции favoriteMovies хранилища
  const dispatch = useDispatch();
  const [findByTitle, setFindByTitle] = useState("");

  const filteredMovies = movies.filter((movie) => // фильтруем массив movies оставляя только те, в названии которых есть подстрока findTitle 
    movie.title.toLowerCase().includes(findByTitle.toLowerCase())
  );

  return (
    <div>
      <h2>List of favorite films</h2>
      <div>
        <input
          type="text"
          placeholder="Enter your favorite movie title"
          value={findByTitle}
          onChange={(e) => setFindByTitle(e.target.value)}
        />
      </div>
      <ul className="zebra">
        {filteredMovies.map((movie) => (
          <li key={movie.id}>
            {movie.title}
            <button
              className="delete"
              onClick={() => dispatch(removeMovie(movie.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(clearMovies())}>Clear the list</button>
    </div>
  );
};

export default FavoriteMoviesList;
