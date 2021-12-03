import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bots.map(b => (
          <BotCard key={b.id} bot={b} handleClick={enlistBot}/>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
