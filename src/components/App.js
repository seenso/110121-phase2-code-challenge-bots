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

  function releaseBot(bot) {
    setBots(bots.filter(b => b.id !== bot.id))

    // below: core deliverables wanted a DELETE endpoint so I put it in App where I can use the fetch()

    fetch(api_url+"/"+bot.id, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(data => console.log("Robot Released!", data))
  }

  return (
    <div className="App">
      <BotsPage bots={bots} releaseBot={releaseBot}/>
    </div>
  );
}

export default App;
