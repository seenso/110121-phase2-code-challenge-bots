import React, {useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({ bots, releaseBot }) {
  //start here with your code for step one
  const [enlistedBots, setEnlistedBots] = useState([])

  function enlistBot(bot) {
    let enlistedBot = {...bot, enlisted: true}; //returns bot w "enlisted: true"
    setEnlistedBots([...enlistedBots, enlistedBot]) //...enlistedBots is "not iterable" error
    // setEnlistedBots(bots.map(b => b.id === bot.id ? {...b, enlisted: true} : b));
    console.log("Enlisted Bots", enlistedBots.filter(b => b.enlisted));
    // console.log("ENLISTED BOTS after enlisting", bots.filter(b => b.enlisted))
  }

  function dischargeBot(bot) {
    setEnlistedBots(enlistedBots.map(b => b.id === bot.id ? {...b, enlisted: false} : b))
    // console.log("ENLISTED BOTS after discharge", bots.filter(b => b.enlisted))
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
