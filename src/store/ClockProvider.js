import { useEffect, useState } from "react";
import ClockContext from "./clock-context";

const ClockProvider = (props) => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [current, setCurrent] = useState(["Session", sessionLength * 60]);
  const [timerOn, setTimerOn] = useState(false);

  const breakDecrementHandler = () => {
    if (breakLength > 1 && !timerOn) {
      setBreakLength((prev) => prev - 1);
      if (current[0] === "Break") {
        setCurrent((prev) => ["Break", prev[1] - 60]);
      }
    }
  };

  const breakIncrementHandler = () => {
    if (breakLength < 60 && !timerOn) {
      setBreakLength((prev) => prev + 1);
      if (current[0] === "Break") {
        setCurrent((prev) => ["Break", prev[1] + 60]);
      }
    }
  };

  const sessionDecrementHandler = () => {
    if (sessionLength > 1 && !timerOn) {
      setSessionLength((prev) => prev - 1);
      if (current[0] === "Session") {
        setCurrent((prev) => ["Session", prev[1] - 60]);
      }
    }
  };

  const sessionIncrementHandler = () => {
    if (sessionLength < 60 && !timerOn) {
      setSessionLength((prev) => prev + 1);
      if (current[0] === "Session") {
        setCurrent((prev) => ["Session", prev[1] + 60]);
      }
    }
  };

  const sessionBreakHandler = () => {
    if (current[0] === "Session") {
      setCurrent(["Break", breakLength * 60]);
    } else {
      setCurrent(["Session", sessionLength * 60]);
    }
  };

  const startStopHandler = () => {
    setTimerOn((prev) => !prev);
  };

  const resetHandler = () => {
    setTimerOn(false);
    setBreakLength(5);
    setSessionLength(25);
    setCurrent(["Session", 1500]);
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };

  let timer;

  useEffect(() => {
    if (timerOn) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timer = setInterval(() => {
        setCurrent((prev) => [prev[0], prev[1] - 1]);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [timerOn]);

  useEffect(() => {
    if (current[1] === 0) {
      const audio = document.getElementById("beep");
      audio.play();
      current[0] === "Session"
        ? setCurrent(["Break", breakLength * 60])
        : setCurrent(["Session", sessionLength * 60]);
    }
  }, [current, breakLength, sessionLength]);

  const clockContext = {
    breakLength: breakLength,
    sessionLength: sessionLength,
    current: current,
    breakDecrement: breakDecrementHandler,
    breakIncrement: breakIncrementHandler,
    sessionDecrement: sessionDecrementHandler,
    sessionIncrement: sessionIncrementHandler,
    sessionBreakHandler: sessionBreakHandler,
    reset: resetHandler,
    startStop: startStopHandler,
  };

  return (
    <ClockContext.Provider value={clockContext}>
      {props.children}
    </ClockContext.Provider>
  );
};

export default ClockProvider;
