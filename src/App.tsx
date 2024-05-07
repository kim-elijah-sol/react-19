import SteopForwardRef from "./StopForwardRef";
import UseWrapper from "./Use";
import UseOptimistic from "./UseOptimistic";
import UseTransition from "./UseTransition";

function App() {
  return (
    <main>
      <UseTransition />

      <hr />

      <SteopForwardRef />

      <hr />

      <UseWrapper />

      <hr />

      <UseOptimistic />
    </main>
  );
}

export default App;
