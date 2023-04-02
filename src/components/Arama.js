import React, { useEffect, useState } from "react";
import Kart from "./Kart";

function Arama(props) {
  const [ara, setAra] = useState("");
  const [veri2, setVeri2] = useState([]);

  // componentDidMount(() => {
  //   setVeri2(props.veriler);
  // });

  useEffect(() => {
    setVeri2(
      props.veriler.filter((x) => {
        return ara === ""
          ? x
          : x.Bolge.toLowerCase().includes(ara.toLowerCase());
      })
    );
  }, [ara]);

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
      <Kart veri2={ara === "" ? props.veriler : veri2} arama={ara} />
    </div>
  );
}

export default Arama;
