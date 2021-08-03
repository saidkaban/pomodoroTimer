import ClockProvider from "./store/ClockProvider";
import LengthControl from "./components/LengthControl";
import SessionView from "./components/SessionView";
import Controls from "./components/Controls";
//import { useTimer } from "./hooks/useTimer";

// const TestInput = () => {
//   const [input, setInput] = useTimer("");

//   const formSubmitHandler = (event) => {
//     event.preventDefault();

//     console.log(input);
//   };

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <input onChange={e => setInput(e.target.value)}></input>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

const App = () => {
  return (
    <ClockProvider>
      <div id="wrapper">
        <h1>25 + 5 Clock</h1>
        <LengthControl  />
        <SessionView  />
        <Controls  />
      </div>
    </ClockProvider>
  );
};

export default App;
