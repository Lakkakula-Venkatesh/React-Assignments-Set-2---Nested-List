import React from "react";
import City from "./CitiesComponent";

export default function State({ states }) {
  const [cityIndex, setCityIndex] = React.useState(-1);
  const handleCity = (event) => {
    let index = event.target.id;
    index = index.charAt(index.length - 1) - 1;
    setCityIndex(index);
  };
  return (
    <>
      {states.map((item, index) => (
        <div key={index} onClick={handleCity} id={`state${index + 1}`}>
          {item.name}
        </div>
      ))}
      {cityIndex !== -1 && <City city={states[cityIndex]} />}
    </>
  );
}
