import React from 'react';
import {useHistory} from 'react-router-dom'; /* added */

const SavedList = props => {
  const movieWatched = useHistory();
  const goBack = () => {movieWatched.push("/")}
  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    {/* Part 2.4 - Add functionality so the `Home` button on the `SavedList` component navigates back to home. */}
    <div onClick = {goBack} className="home-button">Home</div>
  </div>
);

}
export default SavedList;
