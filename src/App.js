import { useState, useCallback } from "react";
import EditName from "./EditName";

const App = () => {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(false);

  const plusCount = () => {
    setCount(count + 1);
  };

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <>
      <p></p>
      <div>{count}</div>
      <div onClick={plusCount}>countUp</div>
      <EditName display={display} toggleDisplay={toggleDisplay} />
    </>
  );
};

export default App;
