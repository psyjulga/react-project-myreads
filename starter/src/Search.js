import { useState, useEffect } from "react";
import { search } from "./BooksAPI";
import Book from "./Book";

// TODO
// api call does not work properly

const Search = ({ goToSearchPage, shelfStatus }) => {
  const [input, setInput] = useState("react");
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const booksData = await search(input, 20);
    console.log(booksData);
    // DOES NOT SEEM TO WORK PROPERLY
    setBooks(booksData);
  };

  const getInput = (e) => {
    setInput(e.target.value);

    getBooks();
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={goToSearchPage}>
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            onChange={getInput}
            value={input}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          <Book books={books} />
        </ol>
      </div>
    </div>
  );
};

export default Search;
