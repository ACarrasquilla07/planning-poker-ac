import { useState } from "react";
import "./App.css";
import { Card } from "./components/card/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>My Planning Poker AC</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className="hand">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
