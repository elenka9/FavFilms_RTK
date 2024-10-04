// компонент для добавления фильма
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../../movie/favoriteMoviesSlice";
import "./MovieInput.css"

// инициализируем состояние и предоставляем доступ к функции dispatch для взаимодействия с хранилищем
const MovieInput = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [errors,setErrors] = useState({})
  const dispatch = useDispatch();
  const movies=useSelector(state=>state.favoriteMovies.movies)

  const validate=()=>{
    const newErrors ={};
    if (!movieTitle.trim()) newErrors.movieTitle = 'Вы не ввели название фильма'
    if (movies.includes(movieTitle.trim())) newErrors.movieTitle = "Такой фильм уже есть"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0 //возвращает true если нет ошибок

  }
  
  const handleAddMovie  = () => {    
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
      <input
        type="text"
        placeholder="Enter movie title"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)} // анонимная функция обновляет состояние movieTitle  новым значением,e.target.value -это значение которое было введено в поле ввода
      />
    {errors.movieTitle && <span style={{ color: 'red' }}>{errors.movieTitle}</span>}
      <button onClick={handleAddMovie}>Add</button>
    </div>
    
    
  );
};

export default MovieInput;

