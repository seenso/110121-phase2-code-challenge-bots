import React, {useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({ bots, releaseBot }) {
  //start here with your code for step one
  const [enlistedBots, setEnlistedBots] = useState([])

  function enlistBot(bot) {
    setEnlistedBots(bots.map(b => b.id === bot.id ? {...b, enlisted: true} : b))
    console.log("Enlisted this bot", bot);
  }

  function dischargeBot(bot) {
    setEnlistedBots(bots.map(b => b.id === bot.id ? {...b, enlisted: false} : b))
    console.log("Discharge this bot", bot);
    console.log("CURRENT ENLISTED BOTS")
  }

  return (
    <div>
      <YourBotArmy enlistedBots={enlistedBots.filter(b => b.enlisted)} 
                   dischargeBot={dischargeBot} 
                   releaseBot={releaseBot}/>   
      <BotCollection bots={bots.filter(b => b.enlisted !== false)} 
                    enlistBot={enlistBot} 
                    releaseBot={releaseBot}/>
    </div>
  )
}

export default BotsPage;
