import { useState } from "react";
import { Button } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
