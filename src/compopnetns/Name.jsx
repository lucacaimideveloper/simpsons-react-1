import React from "react";

const Name = (props) => {
  const { name, quote, onLikeToggle, liked, onDelete } = props;
  return (
    <div>
      <h1>{name}</h1>
      <button
        style={{ backgroundColor: liked ? "red" : "blue" }}
        onClick={() => {
          onLikeToggle(quote);
        }}>
        LIKE/DISLIKE
      </button>
      <button onClick={() => onDelete(quote)}>Delete</button>
    </div>
  );
};

export default Name;
