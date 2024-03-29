import React, { useEffect, useState } from "react";
import Arama from "./Arama";
import Baslik from "./Baslik";

function Cekici() {
  const [veriler, setVeriler] = useState([]);

  useEffect(() => {
    fetch("https://openapi.izmir.bel.tr/api/ibb/nobetcieczaneler")
      .then((resp) => resp.json())
      .then((resp) => {
        resp.sort(function (a, b) {
          return a.Bolge.localeCompare(b.Bolge);
        });
        setVeriler(resp);
      });
  }, []);

  return (
    <div>
      <Baslik />
      <Arama veriler={veriler} />
    </div>
  );
}

export default Cekici;
