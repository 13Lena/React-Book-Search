import React from "react";
import API from "../utils/API";
import SearchForm from "../components/searchForm";
import BookResult from "../components/bookList";

function Search() {
  const [bookInput, setBookInput] = React.useState("");
  const handleChange = e => setBookInput(e.target.value);
  const handleSearchClick = async e => {
    const response = await API.searchBooks(bookInput);
    // debugger;
  };

  return (
    <main>
      <SearchForm
        handleChange={handleChange}
        handleSearchClick={handleSearchClick}
      />

      <BookResult />
    </main>
  );
}

export default Search;
