import {TOGGLE_FAVORITES,ADD_FAVORITE,REMOVE_FAVORITE} from "../actions/favoritesActions";

const initialState = {
    favorites: [],
    displayFavorites: false
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FAVORITE:
        return {
          ...state,
          favorites: [...state.favorites, action.payload]
        }
    case REMOVE_FAVORITE:
        return {
          ...state,
          favorites: state.favorites.filter(movie => (action.payload !== movie.id))
        }
    
    case TOGGLE_FAVORITES:
        return {
          ...state,
          displayFavorites: !state.displayFavorites
        }
      default:
        return state;
    }
  }
  
  export default reducer;