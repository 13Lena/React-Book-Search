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

// import React from "react";
// import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
// export function RecipeList({ children }) {
//   return <ul className="list-group">{children}</ul>;
// }

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
// export function RecipeListItem({
//   thumbnail = "https://placehold.it/300x300",
//   title,
//   ingredients,
//   href
// }) {
//   return (
//     <li className="list-group-item">
//       <Container>
//         <Row>
//           <Col size="xs-4 sm-2">
//             <Thumbnail
//       className="thumbnail"
//       role="img"
//       aria-label="Recipe Image"
//       style={{
//         backgroundImage: `url(${src})`
//       }}
//      />
//           </Col>
//           <Col size="xs-8 sm-9">
//             <h3>{title}</h3>
//             <p>Ingredients: {ingredients}</p>
//             <a rel="noreferrer noopener" target="_blank" href={href}>
//               Go to recipe!
//             </a>
//           </Col>
//         </Row>
//       </Container>
//     </li>
//   );
// }
