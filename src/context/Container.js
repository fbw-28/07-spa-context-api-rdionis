import React, { useState } from "react";
import Context from "./Context";
const Container = (props) => {
  //these are props coming from React
  const [x, setX] = useState(10);
  const [y, setY] = useState(13);
  //any state that you create here, you need to pass it as a value to Context

  return (
    <Context.Provider value={{ x, setX, y, setY }}>
      {props.children}
    </Context.Provider>
  );
};

export default Container;
