// компонент для добавления фильма
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../../movie/favoriteMoviesSlice";
import "./MovieInput.css";

// инициализируем состояние и предоставляем доступ к функции dispatch для взаимодействия с хранилищем
const MovieInput = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.favoriteMovies.movies);

  const validate = () => {
    const newErrors = {};
    if (!movieTitle.trim())
      newErrors.movieTitle = "Вы не ввели название фильма";
    else if (
      movies.some(
        (movie) => movie.title.toLowerCase() === movieTitle.trim().toLowerCase()
      )
    )
      // есть ли в массиве хотябы 1 элемент (метод some), который удовлетворяет условию колбэк-функции.
      newErrors.movieTitle = "Такой фильм уже есть";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; //возвращает true если нет ошибок
  };

  const handleAddMovie = () => {
    if (validate()) {
      const newMovie = {
        id: Date.now(),
        title: movieTitle.trim(),
      };
      dispatch(addMovie(newMovie)); // c помощью диспетчера отправляем действие addMovie() в хранилище
      setMovieTitle(""); // после сбрасываем состояние MovieTitle в пустую строку
    }
  };

  return (
    <div>
      {errors.movieTitle && <p style={{ color: "red" }}>{errors.movieTitle}</p>}
      <input
        type="text"
        placeholder="Enter movie title"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)} // анонимная функция обновляет состояние movieTitle  новым значением,e.target.value -это значение которое было введено в поле ввода
      />
      <button onClick={handleAddMovie}>Add</button>
    </div>
  );
};

export default MovieInput;
