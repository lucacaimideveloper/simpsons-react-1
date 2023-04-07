import React from "react";

const Name = (props) => {
  const { name, quote, onLikeToggle, liked, onDelete } = props;
  return (
    <div>
      <h1>{name}</h1>
      <button
        style={{ backgroundColor: liked ? " #ffd90f" : " rgb(29, 144, 233)" }}
        onClick={() => {
          onLikeToggle(quote);
        }}>
        Like!
      </button>
      <button className="buttonD" onClick={() => onDelete(quote)}>
        Delete
      </button>
    </div>
  );
};

export default Name;
