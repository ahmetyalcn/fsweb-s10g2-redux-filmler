export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (movie) => {
  return ({ type: DELETE_MOVIE, payload: movie });
}
export const addMovie = (id) => {
  return ({ type: ADD_MOVIE, payload: id });
}