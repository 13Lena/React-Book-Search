import React from "react";
// import API from "../utils/API";

function SearchForm(props) {
  return (
    <div>
      <h3>Search</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.handleSearchClick(e);
        }}
      >
        <input
          type="text"
          form="bookSearch"
          onChange={e => props.handleChange(e)}
          placeholder="Book Title"
          required
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
