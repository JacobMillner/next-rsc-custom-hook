"use client";

import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  return {
    count,
    setCount,
  };
};
