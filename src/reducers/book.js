import { CREATE_BOOK, REMOVE_BOOK } from '../action-type';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.bookID !== action.book.bookID);
    default:
      return state;
  }
};
