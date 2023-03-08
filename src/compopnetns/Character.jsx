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
    onLiketToggle,
    liked,
    characterDirection,
  } = props;

  if (charcaterDirection === "left") {
    return (
      <>
        <Name
          liked={liked}
          name={name}
          quote={quote}
          onLikeToggle={onLiketToggle}
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
        liked={liked}
        name={name}
        quote={quote}
        onLikeToggle={onLiketToggle}
        onDelete={onDelete}
      />
      <Image image={image} name={name} />
      <Quote quote={quote} />
    </>
  );
};

export default Character;
