
import { useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';
import Header from './Header';

function App() {

  const [ movies, setMovies ] = useState([])

  const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093"

  // const example = ["one", "two"];

  useEffect(()=>{
    
      fetch(API_URL)
      .then((res)=>res.json())
      .then(data=>{
        console.log(data);
          setMovies(data.results);
      })

  }, [])

  return (
    <div className='app'>
      <Header />  
          <div className=''>
              
            {movies.map((movieReq)=>
                <MovieBox key={movieReq.id} {...movieReq}/>
            )}
          </div>
    </div>
  );
}

export default App;
