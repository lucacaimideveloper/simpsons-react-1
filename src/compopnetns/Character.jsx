import React from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";

const Character = (props) => {
  const {
    onDelete,
    name,
    quote,
    image,
    onLikeToggle,
    liked,
    characterDirection,
  } = props;
  //direction
  if (characterDirection === "left") {
    return (
      <>
        <Name
          name={name}
          liked={liked}
          quote={quote}
          onLikeToggle={onLikeToggle}
          onDelete={onDelete}
        />
        <Image image={image} name={name} />
        <Quote quote={quote} />
      </>
    );
  }
  return (
    <>
      <Name
        name={name}
        liked={liked}
        quote={quote}
        onLikeToggle={onLikeToggle}
        onDelete={onDelete}
      />
      <Image image={image} name={name} />
      <Quote quote={quote} />
    </>
  );
};

export default Character;
