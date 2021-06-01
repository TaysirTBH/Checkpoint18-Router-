import React from 'react';
import StarRatingComponent from 'react-star-rating-component';


const Moviecard = ({title,posterURL,description,rate}) => {
  return (
    <div className="movie">
      <img src={posterURL} alt="This is the movie poster"/>
      <div className="movie-info">
        <h3>{title}</h3>
        <StarRatingComponent className="star-rating"
              name= 'rate'
              value={rate}
              starCount={5}
              starColor={'#e50914'} 
              emptyStarColor={'#9E9E9E'}
        />   
      </div>
      <div className="movie-over">
        <h3>Overview: </h3>
        <p>{description}</p>
      </div>
    </div>
  )
};

export default Moviecard;
