"use client";

import { useCounter } from "../hooks/useCounter";

export const Buttons2 = () => {
  const { count, setCount } = useCounter();
  const handleAdd = () => setCount(count + 1);
  const handleSubtract = () => setCount(count - 1);
  return (
    <>
      <h3>Current Count: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
    </>
  );
};
