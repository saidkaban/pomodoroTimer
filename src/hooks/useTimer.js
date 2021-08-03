import { useState, useRef } from "react";

export const useTimer = (initialVal) => {
  const [val, setVal] = useState(initialVal);
  const timer = useRef(null);

  const inputChangeHandler = (newVal) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      console.log(newVal);
      setVal(newVal);
    }, 1000);
  };

  return [val, inputChangeHandler];
};
