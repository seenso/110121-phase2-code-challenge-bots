import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot, releaseBot }) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(b => (
          <BotCard key={b.id} bot={b} handleClick={enlistBot} releaseBot={releaseBot}/>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
