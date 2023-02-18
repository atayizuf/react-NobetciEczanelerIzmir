import React from "react";
import "./kart.css";

function Kart(props) {
  return (
    <div>
      {props.veriler.map((x) => (
        <>
          <div className="kart">
            <div className="bolge">{x.Bolge}</div>
            <div className="ad">{x.Adi}</div>
            <div className="tel">{x.Telefon}</div>
            <div className="adres">{x.Adres}</div>
            {x.BolgeAciklama && (
              <div className="aciklama">{x.BolgeAciklama}</div>
            )}
          </div>
        </>
      ))}
    </div>
  );
}

export default Kart;
