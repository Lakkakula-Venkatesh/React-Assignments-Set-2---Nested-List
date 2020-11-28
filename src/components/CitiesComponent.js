import React from "react";
import Town from "./TownsComponent";

export default function City({ city }) {
  const [townIndex, setTownIndex] = React.useState(-1);
  const handleTown = (event) => {
    let index = event.target.id;
    index = index.charAt(index.length - 1) - 1;
    setTownIndex(index);
  };
  return (
    <>
      {city.cities.map((item, index) => (
        <div onClick={handleTown} id={`city${index + 1}`} key={index}>
          {item.name}
        </div>
      ))}
      {townIndex !== -1 && <Town town={city.cities[townIndex]} />}
    </>
  );
}
