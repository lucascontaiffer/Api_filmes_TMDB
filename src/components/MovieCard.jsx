import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const imageURL = import.meta.env.VITE_IMG;

const MovieCard = (props) => {
    const { movie } = props
  return (
    <div className='card-container'>
        <img src={imageURL + movie.poster_path} alt={movie.title}/>
        <h2>{movie.title}</h2>
        <p>
            <FaStar/>{ movie.vote_average}
        </p>
        {<Link to={`/movie/${movie.id}`}>Detalhes</Link>} 
    </div>
  )
}

export default MovieCard