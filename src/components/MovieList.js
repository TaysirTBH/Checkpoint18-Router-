import React from 'react'
import MovieCard from './MovieCard';
import { Link} from 'react-router-dom';

const MovieList = ({movies}) => {

    return (
        <section className='App-List'>
            {movies.map((movie) => (
        <Link to={`/detail/${movie.id}`} className="Link">
        <MovieCard key={movie.id} {...movie}/></Link>
        ))}
        </section>
    )
}

export default MovieList
