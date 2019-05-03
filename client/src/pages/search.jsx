import React from "react";
import API from "../utils/API";
import SearchForm from "../components/searchForm";
import BookResult from "../components/bookList";

function Search() {
  const [bookInput, setBookInput] = React.useState("");
  const [books, setBooks] = React.useState([]);
  const handleChange = e => setBookInput(e.target.value);
  const handleSearchClick = async e => {
    const response = await API.searchBooks(bookInput);
    // debugger;
    setBooks(
      response.data.map(
        ({
          volumeInfo: {
            title,
            authors,
            description,
            imageLinks: { thumbnail }
          }
        }) => ({
          title,
          author: (authors || [])[0] || "",
          summary: description,
          image: thumbnail
        })
      )
    );
    // debugger;
  };

  return (
    <main>
      <SearchForm
        handleChange={handleChange}
        handleSearchClick={handleSearchClick}
      />

      <BookResult books={books} />
    </main>
  );
}

export default Search;
