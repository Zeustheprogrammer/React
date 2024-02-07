import "./App.css";
import Counter from "./components/counter/counter";

function App() {
  let counter = 10;
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter counterValue={counter} />
    </div>
  );
}

export default App;
