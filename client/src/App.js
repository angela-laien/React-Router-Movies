import React, { useState } from 'react';
import {Route} from "react-router-dom"; /* added */
import MovieList from './Movies/MovieList'; /* added */
import Movie from './Movies/Movie'; /* added */
import SavedList from './Movies/SavedList';

const App = () => {
  const savedList = useState( [] );

  //  const addToSavedList = movie => {
  //   setSavedList( [...savedList, movie] );
  // }; 

  return (
    <div>
      <SavedList list={savedList} />
      {/* <div>Replace this Div with your Routes</div> */}
      {/* Part 1.2 - Inside your App file add two routes.
  - one route for `/` that loads the `MovieList` component.
  - one route that will take an `id` parameter after`/movies/` (ex: `/movies/2`, `/movies/3` where the id is dynamic). This route should load the `Movie` component. */}
      <Route exact path="/">
        <MovieList />
      </Route>
      
      <Route path="/Movies/:id">
        <Movie />
      </Route>
    </div>
  );
};

export default App;
