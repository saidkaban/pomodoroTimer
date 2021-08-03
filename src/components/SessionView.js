import { memo, useContext } from "react";
import ClockContext from "../store/clock-context";

const SessionView = () => {
  const clockCtx = useContext(ClockContext);

  let timeLeft = new Date(clockCtx.current[1] * 1000)
    .toISOString()
    .substr(14, 5);
  if (
    new Date(clockCtx.current[1] * 1000).toISOString().substr(12, 7) ===
    "1:00:00"
  )
    timeLeft = "60:00";

  return (
    <div id="session-view">
      <h3 id="timer-label" onClick={clockCtx.sessionBreakHandler}>{clockCtx.current[0]}</h3>
      <h1 id="time-left">{timeLeft}</h1>
      <audio
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
        id="beep"
      ></audio>
    </div>
  );
};

export default memo(SessionView);
