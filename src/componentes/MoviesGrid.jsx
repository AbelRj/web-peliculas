
import { MovieCard } from './MovieCard';
import movies from './movies.json';
import './MoviesGrid.css';
export function MoviesGrid(){
  
    return(
        <ul className='MoviesGrid'>
         {movies.map((movie)=>(
        <MovieCard key={movie.id} movie={movie}/>
         ))}
        </ul>
    )
}