import React from "react";
import Town from "./TownsComponent";

export default function City({ city, index }) {
  const [townIndex, setTownIndex] = React.useState(index);
  const handleTown = (event) => {
    let index = event.target.id;
    index = index.charAt(index.length - 1) - 1;
    setTownIndex(index);
  };
  return (
    <>
      {city.cities.map((item, index) => (
        <li onClick={handleTown} id={`city${index + 1}`} key={index}>
          {item.name}
        </li>
      ))}
      <br />
      <br />
      <em><b>Town</b></em>
      {townIndex !== -1 && <Town town={city.cities[townIndex]} />}
    </>
  );
}
