import React from "react";

function Kart(props) {
  return (
    <div>
      {props.veriler.map((x) => (
        <div>{x.Bolge}</div>
      ))}
    </div>
  );
}

export default Kart;
