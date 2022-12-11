import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const increaseCount = () => {
    dispatch(counterActions.increase());
  };
  const decreaseCount = () => {
    dispatch(counterActions.decrease());
  };
  return (
    <div style={{ backgroundColor: "aqua", width: "100%" }}>
      <h1>Counter Component</h1>
      <h2>count:{count}</h2>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
}

export default Counter;
