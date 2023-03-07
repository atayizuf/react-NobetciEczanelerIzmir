import React, { useState } from "react";

function Arama() {
  const [ara, setAra] = useState("");
  console.log(ara);

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
    </div>
  );
}

export default Arama;
