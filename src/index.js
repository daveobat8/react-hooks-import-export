import React from "react";
import ReactDOM from "react-dom";
import ColoradoStateParks from "./ColoradoStateParks";
import MesaVerde from "./parks/MesaVerde";
import RockyMountain from "./parks/RockyMountain";


function index() {
  return (
    <div>
        <ColoradoStateParks />
        <MesaVerde/>
        <RockyMountain/>
    </div>
  )
}

export default index
ReactDOM.render(index(), document.getElementById("root"));
