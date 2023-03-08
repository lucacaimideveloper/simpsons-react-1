import React from "react";

const Characters = (props) => {
  const { characters, onLikeToggle, onDelete } = props;

  return characters.map((item) => {
    return (
      <div className="character" key={item.uniqueId}>
        <Characters
          liked={item.liked}
          name={item.name}
          quote={item.quote}
          image={item.image}
          characterDirection={item.characterDirection}
          onLikeToggle={onLikeToggle}
          onDelete={onDelete}
        />
      </div>
    );
  });
};

export default Characters;
