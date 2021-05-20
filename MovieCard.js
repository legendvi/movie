import React from 'react'


class MovieCard extends React.Component {
    render() {
        const {movie }=this.props;
        return (
            <div className="movie-card">   
            <div className='left'>
                <img alt='movie-poster' src={movie.Poster} />
            </div>
            <div className='right'>
            <div classname='title'>{movie.Title}</div>
            <div classname='plot'>{movie.Plot}</div>
            <div classname='footer'>
                < div className='rating'>{movie.imbdRating} </div>
                <button className='favaourite-btn'>
                    favaorite
                </button>
            </div>
            </div>
                </div>
 
          );
    }
 
}

export default MovieCard    ;
