import React, { useState } from "react";
import Kart from "./Kart";

function Arama(props) {
  const [ara, setAra] = useState("");

  // console.log(ara, props);
  // console.log(props.veriler);

  return (
    <div>
      <input
        onChange={(e) => setAra(e.target.value.toLocaleUpperCase())}
        value={ara}
        className="arama"
        type="text"
        placeholder="Bölge Adı ile arama yapın..."
        ara={ara}
      ></input>
      <Kart veriler={props.veriler} arama={ara} />
    </div>
  );
}

export default Arama;
