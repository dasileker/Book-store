import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  bookID,
  title,
  category,
  handleRemoveBook,
}) => (
  <tr>
    <td>{bookID}</td>
    <td>{title}</td>
    <td>{category}</td>
    
  </tr>
);

Book.propTypes = {
  bookID: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;