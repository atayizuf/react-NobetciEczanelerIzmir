import React, { useEffect, useState } from "react";
import Kart from "./Kart";
import "bootstrap/dist/css/bootstrap.min.css"

function Arama(props) {
  const [ara, setAra] = useState("");
  const [veri2, setVeri2] = useState([]);

  useEffect(() => {
    setVeri2(
      props.veriler.filter((x) => {
        return ara === ""
          ? x
          : x.Bolge.toLocaleLowerCase().includes(ara.toLocaleLowerCase());
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
      {props.loading === false ? (
        <Kart veri2={ara === "" ? props.veriler : veri2} arama={ara} />
      ) : (
        <>
          <div className="text-white">Eczane bilgileri günlük olarak güncellenmektedir.</div>
          <div className="text-white">Gelen kartlar üzerinde, telefon numaralarına tıklayarak arama yapabilirsiniz.</div>
          <div className="yukleniyor">Yükleniyor...</div>
          <div className="spinner-border text-danger" role="status" />
        </>
      )}
    </div>
  );
}

export default Arama;
