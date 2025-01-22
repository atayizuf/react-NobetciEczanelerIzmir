import React, { useEffect, useState } from "react";
import { use } from "react";

function Baslik(props) {
  function tarihAl(ver) {
    const verim = ver[0].Tarih;
    const tarihim = new Date(verim);
    return tarihim.toLocaleDateString("tr-TR");
  }

  return (
    <>
      <h1 className="baslikim">IZMIR</h1>
      {props.loading === false ? (
        <span className="tarihsel text-white m-3 text-[128px]">
          {tarihAl(props.veriler)}
        </span>
      ) : null}
      <h3 className="baslik1 pb-2">NÖBETÇİ ECZANELER</h3>
      <div className="baslikaciklama p-2">
        <div className="text-white">
          Eczane bilgileri günlük olarak güncellenmektedir.
        </div>
        <div className="text-white">
          Gelen kartlar üzerinde, telefon numaralarına tıklayarak arama
          yapabilirsiniz.
        </div>
      </div>
    </>
  );
}

export default Baslik;
