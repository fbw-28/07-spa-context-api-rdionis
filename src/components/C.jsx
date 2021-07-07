import React, { useContext } from "react";
import Context from "../context/Context";

const C = () => {
  const { y, x, setX } = useContext(Context);
  return (
    <div>
      <h1>C, y= {y} </h1>
      <button onClick={() => setX(x + 1)}>Increment x</button>
    </div>
  );
};

export default C;
