import React from 'react';
import { Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Detail = ({movieList,match}) => {
    const movie= movieList.find(el=>el.id===match.params.id)
    console.log(movie)
    return (
        <div>
            <div className="detail" style={{ display: 'flex',flexDirection: 'column', justifyContent:'center', margin:'50px 70px 50px'}}>
                <h2>{movie.title}</h2>
                <h3>Overview: </h3>
                <p>{movie.description}</p>
                <iframe width="560" height="315" 
                        src={movie.trailer} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>                           
                </iframe> 
                <Link to='/' className="Link">
                    <FontAwesomeIcon icon={["fas","chevron-left"]} color="#b4b4b4"/><span>  Go Back</span>
                </Link>
            </div>
        </div>
    )
}

export default Detail;
