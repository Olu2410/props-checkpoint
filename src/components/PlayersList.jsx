
import Player from "./Player";
import players from "./Players"; 

const PlayersList = () => {
  return (
    <div style={{ display: "flex", gap: '50px', textAlign: "center" }}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;