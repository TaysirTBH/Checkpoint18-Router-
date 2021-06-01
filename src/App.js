import React, {useState} from 'react';
import {Route, BrowserRouter,Switch} from 'react-router-dom';
import MovieList from './components/MovieList';
import movies from './MovieData';
import Filter  from './components/Filter';
import AddMovie from './components/AddMovie';
import Detail from './components/Detail';
import './style.css';

// Font Awesome Imports
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';


// Library Creation
library.add(fas);



function App() {

  const [movieList, setmovieList] = useState(movies);
  const [searchInput, setSearchInput] = useState("")
  const [searchRate, setSearchRate] = useState(1)
  

  const handleSearchInput=(e) => {
      setSearchInput(e.target.value)
  }
  const handleSearchRate=(value)=>{
      setSearchRate(value);
  }
  const handleAdd = (newMovie) => {
    setmovieList([...movieList,newMovie])
  }

  return (
  <BrowserRouter>
      <div className="App">
        <header>
          <h1>Movie Application</h1> 
        </header>
        <main className="App-movie">
          <Switch>
            <Route exact path="/">
              <Filter  handleSearchInput={handleSearchInput} handleSearchRate={handleSearchRate} />
              <MovieList movies={movieList.filter((movie) =>
                          movie.title.toLowerCase().includes(searchInput)&& 
                          movie.rate>=searchRate)} 
              />
              <AddMovie handleAdd= {handleAdd} />
            </Route>
            <Route path="/detail/:id" render={(props)=><Detail {...props} movieList={movieList}/>}>
            </Route>
          </Switch>
        </main>
    </div>
  </BrowserRouter>
  );
}

export default App;
