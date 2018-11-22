import {
  initialState,
  CREATE_BOOK,
  REMOVE_BOOK,
  GET_BOOK
} from '../actions/constants';


export const bookReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        books: [ ...state.books, action.book ]
       }
    case REMOVE_BOOK:
      return {
        books: state.books.filter( book => book.id !== action.id )
      }
    case GET_BOOK:
      return {
        books: state.books.filter( book => book.id === action.id )
      }
    default:
      return state
  }
}
