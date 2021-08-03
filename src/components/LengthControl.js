import { useContext } from "react";
import ClockContext from "../store/clock-context";

const LengthControl = () => {
  const clockCtx = useContext(ClockContext);

  return (
    <div id="length-control">
      <div id="break">
        <h2 id="break-label">Break Length</h2>
        <div id="break-controls">
          <h2
            id="break-decrement"
            onClick={clockCtx.breakDecrement}
            disabled={clockCtx.timerOn}
          >
            &darr;
          </h2>
          <h2 id="break-length">{clockCtx.breakLength}</h2>
          <h2 id="break-increment" onClick={clockCtx.breakIncrement}>
            &uarr;
          </h2>
        </div>
      </div>
      <div id="session">
        <h2 id="session-label">Session Length</h2>
        <div id="session-controls">
          <h2 id="session-decrement" onClick={clockCtx.sessionDecrement}>
            &darr;
          </h2>
          <h2 id="session-length">{clockCtx.sessionLength}</h2>
          <h2 id="session-increment" onClick={clockCtx.sessionIncrement}>
            &uarr;
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LengthControl;
