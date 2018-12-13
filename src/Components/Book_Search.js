import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

class BookSearch extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  state = {
    query: "",
    newBooks: [],
    searchErr: false
  };

  getSearchResults = event => {
    const query = event.target.value;
    this.setState({ query });

    //if search string is not empty
    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ newBooks: books, searchErr: false })
          : this.setState({ newBooks: [], searchErr: true });
      });

      // default on empty query
    } else this.setState({ newBooks: [], searchErr: false });
  };

  render() {
    const { query, newBooks, searchErr } = this.state;
    const { books, changeShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.getSearchResults}
            />
          </div>
        </div>
        <div className="search-books-results">
          {newBooks.length > 0 && (
            <div>
              <h3>About {newBooks.length} books found ... </h3>
              <ol className="books-grid">
                {newBooks.map(book => (
                  <Book
                    book={book}
                    books={books}
                    key={book.id}
                    changeShelf={changeShelf}
                  />
                ))}
              </ol>
            </div>
          )}
          {searchErr && (
            <h3>Oops! no result for your search query. Please try again!</h3>
          )}
        </div>
      </div>
    );
  }
}
export default BookSearch;
