import React from "react";
// import API from "../utils/API";
import SearchForm from "../components/searchForm";
import BookResult from "../components/bookList";


function Search() {

        return(
            <main>
                <SearchForm />
                
                <BookResult />
            </main>
        );
    
}

export default Search;