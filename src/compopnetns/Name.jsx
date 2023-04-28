import React from "react";

const Name = (props) => {
  const { name, quote, onLikeToggle, liked, onDelete } = props;
  // console.log(name, "hello");
  return (
    <div>
      <h1>{name}</h1>
      <div className="button">
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
    </div>
  );
};

export default Name;
