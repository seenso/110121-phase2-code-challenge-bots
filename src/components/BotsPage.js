import React, {useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({ bots }) {
  //start here with your code for step one
  const [enlistedBots, setEnlistedBots] = useState([])

  function enlistBot(bot) {
    setEnlistedBots(bots.map(b => b.id === bot.id ? {...bot, enlisted: true} : b))
    console.log("Enlisted this bot", bot);
  }

  function dischargeBot(bot) {
    setEnlistedBots(bots.map(b => b.id === bot.id ? {...bot, enlisted: false} : b))
    console.log("Discharge this bot", bot);
  }

  return (
    <div>
      <YourBotArmy enlistedBots={enlistedBots.filter(b => b.enlisted)} dischargeBot={dischargeBot}/>
      <BotCollection bots={bots} enlistBot={enlistBot}/>
    </div>
  )
}

export default BotsPage;
