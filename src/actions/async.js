import { API_URL } from './constants';
import { setBooks, setBook, setComments, createBook, editBook, removeBook, createComment, changeFilter } from './index';

export const getBooks = () => {
  return dispatch => {
    return fetch(`${API_URL}/books`)
      .then(response => response.json())
      .then(books => {
        dispatch(setBooks(books))
      })
      .catch(error => console.log(error));
  };
}

export const getBook = bookId => {
  return dispatch => {
    return fetch(`${API_URL}/books/${bookId}`)
      .then(response => response.json())
      .then(book => {
        dispatch(setBook(book))
      })
      .catch(error => console.log(error));
  };
}

export const getComments = bookId => {
  return dispatch => {
    return fetch(`${API_URL}/books/${bookId}/comments`)
      .then(response => response.json())
      .then(comments => {
        dispatch(setComments(comments))
      })
      .catch(error => console.log(error));
  };
}

export const addBook = book => {
  return dispatch => {
    return fetch(`${API_URL}/books`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ book: book })
    })
      .then(response => response.json())
      .then(book => {
        dispatch(createBook(book))
      })
      .catch(error => console.log(error))
  };
}

export const updateBook = book => {
  return dispatch => {
    return fetch(`${API_URL}/books/${book.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ book: book })
    })
      .then(response => response.json())
      .then(book => {
        dispatch(editBook(book))
      })
      .catch(error => console.log(error))
  };
}

export const deleteBook = bookId => {
  return dispatch => {
    return fetch(`${API_URL}/books/${bookId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ book: bookId })
    })
      .then(response => {
        dispatch(removeBook(bookId))
      })
      .catch(error => console.log(error))
  };
}

export const addComment = comment => {
  return dispatch => {
    return fetch(`${API_URL}/comments`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment: comment })
    })
      .then(response => response.json())
      .then(comment => {
        dispatch(createComment(comment))
      })
      .catch(error => console.log(error))
  };
}

export const dispatchFilter = filter => {
  return dispatch => {
    return dispatch(changeFilter(filter))
  }
}
