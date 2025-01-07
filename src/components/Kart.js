import React from "react";
import "./kart.css";

function Kart(props) {
  return (
    <>
      <div className="kapskart">
        {props.veri2.map((x) => (
          <div className="kart" key={x.LokasyonX}>
            <div className="kartyazi">
              <div className="bolge">{x.Bolge}</div>
              <div className="ad">{x.Adi}</div>
              <div className="tel">{x.Telefon}</div>
              <div className="adres">{x.Adres}</div>
              {x.BolgeAciklama && (
                <div className="aciklama">*** {x.BolgeAciklama} ***</div>
              )}
            </div>
            <div
              className="kartbutton"
              onClick={() => {
                window.open(
                  `https://www.google.com/maps/place/${x.LokasyonX},${x.LokasyonY}/@${x.LokasyonX},${x.LokasyonY},17.25z`,
                  // `https://www.google.com/maps/place/1566+sokak+doğanlar+İzmir+/@${x.LokasyonX},${x.LokasyonY},17.25z`,
                  "_blank"
                );
              }}
            >
              <i class="fa-solid fa-map-location"></i>
            </div>
            <div
              className="kartbutton"
              onClick={() => {
                window.open(
                  `http://maps.apple.com/?daddr=${x.LokasyonX},${x.LokasyonY}`,
                  "_blank"
                );
              }}
            >
              <i class="fa-solid fa-map-location"></i>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Kart;
