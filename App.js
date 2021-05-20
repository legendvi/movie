import React from 'react'
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard'
import '../index.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div ClassName='tab'>Movies</div>
          <div ClassName='tab'>Favorites</div>
        </div>
        <div lassName='List'>
          {data.map(movie => ( <MovieCard movie={movie}>

          </MovieCard>))}
        </div>
      </div>
        
      
    </div>
  );
}

export default App;
