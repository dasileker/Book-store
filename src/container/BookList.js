import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import { getFilteredBooks } from '../helper/index';

const BookList = ({
  books,
  filter,
  removeBook,
  changeFilter,
}) => {
  const filteredBooks = getFilteredBooks(books, filter);

  return (
    <>
      <CategoryFilter
        handleFilterChange={changeFilter}
      />
      <table>
        <thead>
          <tr>
            <th>BookID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove Book</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredBooks.map(book => (
              <Book
                key={book.bookID}
                bookID={book.bookID}
                title={book.title}
                category={book.category}
                handleRemoveBook={removeBook}
              />
            ))
          }
        </tbody>
      </table>
    </>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

BookList.defaultProps = {
  books: [],
};

const mapDispatchToProps = { removeBook, changeFilter };

const mapStateToProps = ({ books, filter }) => ({
  books,
  filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
