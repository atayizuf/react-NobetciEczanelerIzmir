import React, { useEffect, useState } from "react";
import Kart from "./Kart";

function Cekici() {
  const [veriler, setVeriler] = useState([]);

  useEffect(() => {
    fetch("https://openapi.izmir.bel.tr/api/ibb/nobetcieczaneler")
      .then((resp) => resp.json())
      .then((resp) => setVeriler(resp));
  }, []);

  return (
    <div>
      <Kart veriler={veriler} />
    </div>
  );
}

export default Cekici;
