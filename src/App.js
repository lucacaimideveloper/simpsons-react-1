import React, { useEffect, useState } from "react";
import axios from "axios";
import Characters from "./compopnetns/Characters";
import "./App.css";
const App = () => {
  const [characters, setCharacters] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const [sortOrder, setSortOrder] = useState("asc");

  const getApiData = async () => {
    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=8`
    );

    setCharacters(results.data); //set the api data
  };

  useEffect(() => {
    getApiData();
  }, []); //run once for using the component

  const onDelete = (quote) => {
    const index = characters.findIndex((character) => {
      return character.quote === quote;
    });

    const _characters = [...characters];

    _characters.splice(index, 1);

    setCharacters(_characters);
  };

  const onLikeToggle = (quote) => {
    const index = characters.findIndex((characters) => {
      return characters.quote === quote;
    });

    const _characters = [...characters];

    _characters[index].liked = !_characters[index].liked;

    setCharacters(_characters);
  };

  const onInput = (e) => {
    // this.state({e.target.value})
    //becomes
    setSearchTerm(e.target.value);
  };

  const onSort = (e) => {
    setSortOrder(e.target.value);
  };

  //no data
  if (!characters) return <p>Loading...</p>;

  //filter
  const filtered = characters.filter((character) => {
    return character.character
      .toLowerCase()
      .includes(searchTerm ? searchTerm.toLowerCase() : "");
  });

  //calculate likes
  let total = 0;
  filtered.forEach((character) => {
    if (character.liked) {
      total += 1;
    }
  });
  //sortdata
  if (sortOrder && sortOrder === "asc") {
    filtered.sort((item, nextItem) => {
      if (item.character > nextItem.character) return 1;
      if (item.character < nextItem.character) return -1;
      return 0;
    });
  } else if (sortOrder) {
    filtered.sort((item, nextItem) => {
      if (item.character > nextItem.character) return -1;
      if (item.character < nextItem.character) return 1;
      return 0;
    });
  }

  return (
    <>
      <div className="nav">
        {" "}
        {/* <select>
          {characters.map((name) => {
            return <option key={name.quote}>{name.character}</option>;
          })}
        </select> */}
        <button className="newData" onClick={getApiData}>
          Get new data
        </button>
        <div className="filter">
          <label htmlFor="filter">Filter: </label>

          <input className="label" id="filter" type="text" onInput={onInput} />
        </div>
        <h3 className="total">total likes ={total}</h3>
        <div className="sort">
          <label htmlFor="sort">Sort</label>
          <select className="select" id="sort" onChange={onSort}>
            <option value="asc">ASC</option>
            <option value="dsc">DSC</option>
          </select>
        </div>
      </div>
      <div className="grid">
        <Characters
          characters={filtered}
          onLikeToggle={onLikeToggle}
          onDelete={onDelete}
          // getApiData={getApiData}
        />
      </div>
    </>
  );
};

export default App;
//hello
