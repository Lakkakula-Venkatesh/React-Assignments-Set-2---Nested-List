import React from "react";

export default function Town({ town }) {
  return (
    <>
      {town.towns.map((item, index) => (
        <div id={`town${index + 1}`} key={index}>
          {item.name}
        </div>
      ))}
    </>
  );
}
