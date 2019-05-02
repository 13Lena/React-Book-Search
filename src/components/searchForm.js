import React from "react";
// import API from "../utils/API";

function SearchForm(props) {
    return(
        <div>
            <h3>Search</h3>
            <form>
                <input 
                    type="text" 
                    form="bookSearch" 
                    onChange={(e) => props.handleChange(e)} 
                    required
                />

                <button 
                    type="submit" 
                    onClick={(e) => props.handleSearchClick(e)}
                >Search
                </button>
            </form>
        </div>
    );
}

export default SearchForm;