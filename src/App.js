
import { useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';
import Header from './Header';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

function App() {


  const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093"
  const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query"

  const [ movies, setMovies ] = useState([])
  const [ query, setQuery ] = useState('')
  

  useEffect(()=>{
    
      fetch(API_URL)
      .then((res)=>res.json())
      .then(data=>{
        console.log(data);
          setMovies(data.results);
      })

  }, [])

  const searchMovie = async (e)=>{
      e.preventDefault();
      console.log('searching')

      try{
        const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log("rechercheData", data);
        setMovies(data.results);
      }
      catch(e){
        console.log(e)
      }
  }

  const changeHandle = (e) => {
      setQuery(e.target.value);
  }

  return (
    <>
        <div className='app navbar'>
      {/* <Header />   */}
          <Navbar bg='dark' expand="lg" variant='dark' className='navbar'>
              <Container>
                  <Navbar.Brand href='/home'>Movie App</Navbar.Brand>
                  <Navbar.Brand href='/home'>Trending</Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
                      <Navbar.Collapse id="navbarScroll">
                          <Nav className='me-auto my-2 my-lg-3' style={{maxHeight: '100px'}} navbarScroll>

                          </Nav>
                              <Form className="d-flex" onSubmit={searchMovie}>
                                  <FormControl type="search" placeholder='Movie Search' required className='me-2'
                                      aria-label='search' name="query" value={query} onChange={changeHandle}>
                                  </FormControl>
                                  <button variant="secondary" type="submit">
                                      Search
                                  </button>
                              </Form>
                          
                      </Navbar.Collapse>
              </Container>
          </Navbar>
          <div> 
             {movies.length > 0 ? ( 
              <div className='app-film'>
                {movies.map((movieReq)=>
                    <MovieBox key={movieReq.id} {...movieReq}/>
                )}
              </div>
              ):
              (<h1>Sorri !!! No Movie Found</h1>)} 
          </div>
    </div>
    </>
  );
}

export default App;
