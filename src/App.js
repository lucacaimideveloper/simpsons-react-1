import React, { useEffect } from "react";
import axios from "axios";
import Characters from "./compopnetns/Characters";

const App = () => {
  const [characters, setCharacters] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const [sortOrder, setSortOrder] = useState("asc");

  const getApiData = async () => {
    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );

    setCharacters(results.data); //set the api data
  };

  useEffect(() => {
    getApiData();
  }, []); //run once for using the component

  const onDelete = (quote) => {
    const index = characters.findIndex((characters) => {
      return characters.quote === quote;
    });

    const _characters = [...characters];

    _characters.splice(index, 1);

    setCharacters(characters);
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
  //filter
  const filtered = characters.filter((charcater) => {
    return charcater.charcater
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

  //no data
  if (!characters) return <p>Loading...</p>;

  return (
    <>
      <div className="nav">
        <select>
          {this.state.characters.map((name) => {
            return <option key={name.quote}>{name.character}</option>;
          })}
        </select>
        <button onClick={getApiData}>Get new data</button>
        <label htmlFor="filter">Filter: </label>
        <input id="filter" type="text" onInput={onInput} />
        <h3>total likes ={total}</h3>
        <lable htmlFor="sort">Sort</lable>
        <select id="sort" onChange={onSort}>
          <option value="asc">ASC</option>
          <option value="dsc">DSC</option>
        </select>
      </div>
      <Characters
        characters={filtered}
        onLikeToggle={onLikeToggle}
        onDelete={onDelete}
        getApiData={getApiData}
      />
    </>
  );
};

export default App;
