import { useParams } from 'react-router-dom';
import './MovieDetail.css';
import movies from '../componentes/movies.json';

export function MovieDetail() {
  const { movieid } = useParams();
  const selectedMovie = movies.find(movie => movie.id === parseInt(movieid));

  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }

  const imageurl = "https://image.tmdb.org/t/p/w500" + selectedMovie.poster_path;

  return (
    <div className='detailsContainer'>
      <img className='columna movieImagen' src={imageurl} alt={selectedMovie.title}/>
      <div className='columna movieDetails'>
        <p className='title'><strong>Title: </strong>{selectedMovie.title}</p>
       
        <p><strong>Description: </strong>{selectedMovie.overview}</p>
        {/* Show other attributes of the selected movie here */}
      </div>
    </div>
  );
}
