import ContextAsAProvider from "./ContextAsAProvider";
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

      <hr />

      <ContextAsAProvider>
        <ContextAsAProvider.Children />
      </ContextAsAProvider>
    </main>
  );
}

export default App;
