# **MyReads - A book lending application**	

A book lending application which allows a user to keep track of books, whether a book is currently being read, wants to read and the ones already read.

The application is built using React and the content is fetched via a backend server fetching the files from *https://reactnd-books-api.udacity.com*

This project is created under Udacity's Frontend Nanodegree Programme.



## Prerequisites

- npm
- react-router-dom module
- CSS grid compatible browser



## Procedure

- Clone/Download the repository 

- Install npm via the command

  `npm install`

  Dependencies: react-router-dom

- Run the application via the command

  `npm start`

  The application will be running at http://localserver:3000

## Features

- The application shows a list of books under three categories 
  1. Current Reading
  2. Read
  3. Want to read
- The name of book and author is listed below book cover image.
- The right-top corner has a plus icon which can be used to add a book to application or search a book.
- The application provides a book search functionality at http://localhost:3000/search
- The application provides the ability to search using name of book or author.
- The application provides the functionality of changing the categorization of book and also remove the book from the Listing.
- Completely responsive and usable across plethora of devices. 
- The books which are not on the shelf have the shelf state as none as visible on search page.

## Preview

> Index page
>
> ![Index Page](Screenshots\Front-Page.png)

> Search Page
>
> ![](E:\Coding\Udacity\FrontEnd\myreads-siddharth\Screenshots\Search-Page.png)

## Backend Server

The Backend Server is setup in BookAPI.js file containing operation like

- getAll() - Retreived the books on your bookshelf

- update(book,shelf) - Update the book categorization or removal from the list

- search(query,maxResults) -

  - query: `<String>`

  - maxResults: `<Integer>`

    *Search results are capped at 20, even if this value is set higher.*

  Returns a list of book matching the string query.


## Author

This project is created by Siddharth Pandey.

The logo of the project is made from font "Libre Barcode 39". 

