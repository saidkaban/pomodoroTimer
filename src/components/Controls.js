import { useContext } from "react";
import ClockContext from "../store/clock-context";

const Controls = () => {
  const clockCtx = useContext(ClockContext);

  return (
    <div id="controls">
      <h1 id="start_stop" onClick={clockCtx.startStop}>
        &#9658;||
      </h1>
      <h1 id="reset" onClick={clockCtx.reset}>
        ↻
      </h1>
    </div>
  );
};

export default Controls;
