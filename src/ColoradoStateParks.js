import React from "react";
import howManyParks from "./parks/howManyParks";

/* function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}
 */

function ColoradoStateParks() {

  howManyParks(); // => "42 parks!"
  return (
    <div>
       <h1>Colorado State Parks!</h1>
    </div>
  )
}

export default ColoradoStateParks