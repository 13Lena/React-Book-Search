import React from "react";
// import { PromiseProvider } from "mongoose";
// import API from "../utils/API";
import Thumbnail from "./Thumbnail";

export function BookResult({ books }) {
  return (
    <div>
      <ul>
        {books.map(
          (
            { image = "http://placehold.it/300x300", title, author, summary },
            i
          ) => (
            <li key={i}>
              <div>
                <h3>{title}</h3>
                <h4>{author}</h4>
                <p>{summary}</p>
                <Thumbnail src={image} />
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default BookResult;
