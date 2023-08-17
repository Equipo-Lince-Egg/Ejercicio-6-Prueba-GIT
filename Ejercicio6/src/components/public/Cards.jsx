import React, { useEffect, useState } from "react";
import { getAllCharacters } from "../../services/RickAndMorty.service";
import Card from "./Card";

const Cards = () => {
  const [personaje, setPersonaje] = useState([]);

  useEffect(() => {
    getAllCharacters()
      .then((data) => setPersonaje(data.results))
      .catch((error) => console.log(error));
  }, [personaje]);

  const cardList = personaje.map((p) => <Card personaje={p} key={p.id} />);

  return <ul className="row">{cardList}</ul>;
};

export default Cards;
