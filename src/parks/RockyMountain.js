import React from 'react'
const trees = "Aspen and Pine";

function wildlife() {
  console.log("Elk, Bighorn Sheep, Moose");
}

function elevation() {
  console.log("9583 ft");
}

export { trees, wildlife };


function RockyMountain() {
  elevation();
  wildlife();

  return (
    <div>
     <h1>RockyMountain</h1> 
    </div>
  )
}

export default RockyMountain