import React, {useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const api_url = "http://localhost:8002/bots";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch(api_url)
    .then(r => r.json())
    .then(data => setBots(data))
  }, []);

  function enlistBot(bot) {
    if (enlistedBots.find(b => b.id === bot.id)) {
      return;
    }

    setEnlistedBots([...enlistedBots, {...bot, enlisted: true}])
    // console.log("Enlisted Bots", enlistedBots.filter(b => b.enlisted));
  }

  function dischargeBot(bot) {
    setEnlistedBots(enlistedBots.filter(b => b.id !== bot.id))
  }

  function releaseBot(e, bot) {
    //to stop bot from being enlisted before being released
    e.stopPropagation();
    setBots(bots.filter(b => b.id !== bot.id))
    setEnlistedBots(enlistedBots.filter(b => b.id !== bot.id))
    // fetch(api_url+"/"+bot.id, {
    //   method: "DELETE"
    // })
    // .then(r => r.json())
    // .then(data => console.log("Robot Released!", data))
  }

  return (
    <div>
      <YourBotArmy enlistedBots={enlistedBots.filter(b => b.enlisted)} 
                   dischargeBot={dischargeBot} 
                   releaseBot={releaseBot}/>   
      <BotCollection bots={bots} 
                    enlistBot={enlistBot} 
                    releaseBot={releaseBot}/>
    </div>
  )
}

export default BotsPage;
