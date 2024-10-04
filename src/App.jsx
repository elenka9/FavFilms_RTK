import './App.css'
import FavoriteMoviesList from './components/FavoriteMoviesList/FavoriteMoviesList'
import MovieInput from './components/MovieInput/MovieInput'


function App() {
 
  return (
    <>
    <div className='container'>
      <h1>My favorite films</h1>
      <MovieInput/>
      <FavoriteMoviesList/>
    </div>
      
    </>
  )
}

export default App
