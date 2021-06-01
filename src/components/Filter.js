import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Filter = ({handleSearchInput,handleSearchRate}) => {
    return (
        <section className='Filter'>
            <form>
                <input 
				    className="searchbox" 
				    type="search" 
				    placeholder="Search for a movie..." 
                    name='title'
				    onChange={handleSearchInput}
			    />
                <StarRatingComponent
                    className="star-rating" 
                    name='rate1'
                    starCount={5}
                    starColor={'#e50914'}
                    emptyStarColor={'#9E9E9E'}
                    onStarClick={(value)=>handleSearchRate(value)}
                />
            </form>
        </section>
    )
}

export default Filter;
