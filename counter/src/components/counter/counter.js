import { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.counterValue);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="Counter">
      <div
        className="btn btn-primary d-inline-block"
        onClick={decrementCounter}
      >
        -
      </div>
      <div className="btn btn-light d-inline-block">{counter}</div>
      <div
        className="btn btn-primary d-inline-block"
        onClick={incrementCounter}
      >
        +
      </div>
    </div>
  );
};

export default Counter;
