import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ enlistedBots, dischargeBot, releaseBot }) {
  //your bot army code here...
  // console.log("ENLISTED BOTS from YourBotArmy", enlistedBots)

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {enlistedBots.map(b => (
            <BotCard key={b.id} bot={b} handleClick={dischargeBot} releaseBot={releaseBot}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
