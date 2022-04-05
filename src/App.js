import{ useState } from "react";

function App() {
  const [message, setMessage] = useState(
    "JavaScript is the best language in the world"
  );

  // actions
  function handleClick() {
    setMessage("I am a BOSS! at JavaScript");
  }

  // UI
  return (
  <div>
    <h1>{message}</h1>
    <button onClick={handleClick}>Update the message!</button>
    </div>
    );
}

export default App;
