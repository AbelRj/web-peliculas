import { Link } from 'react-router-dom';
import './MovieCard.css';
export function MovieCard({movie}){
    const imageurl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
    <li className='movieCard'>
        <Link to={"/movies/"+movie.id}>
        <img className='movieImage' src={imageurl} alt={movie.title}/>
        <div>{movie.title}</div>
        </Link>
    </li>
    )
}