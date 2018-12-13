import React from "react";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "../css/App.css";
import BookListing from "./Book_Listing";
import { Link } from "react-router-dom";
import BookSearch from "./Book_Search";

class BooksApp extends React.Component {
  state = { books: [] };

  componentDidMount() {
    //Fetch books after UI is loaded
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  onChangeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      changedBook.shelf = shelf; //setting BookShelf
      // update state value
      this.setState(prevState => ({
        books: prevState.books
          // remove book from array
          .filter(book => book.id !== changedBook.id)
          // add updated book back
          .concat(changedBook)
      }));
    });
  };

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Switch>
          <Route
            path="/search"
            render={({ history }) => (
              <BookSearch books={books} changeShelf={this.onChangeShelf} />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <BookListing books={books} changeShelf={this.onChangeShelf} />
                <div className="open-search">
                  <Link to="/search">Search</Link>
                </div>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
