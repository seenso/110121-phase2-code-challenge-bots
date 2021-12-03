import React, { useEffect, useState } from "react";
import BotsPage from "./BotsPage";

const api_url = "http://localhost:8002/bots";

function App() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch(api_url)
    .then(r => r.json())
    .then(data => setBots(data))
  }, []);

  return (
    <div className="App">
      <BotsPage bots={bots}/>
    </div>
  );
}

export default App;
