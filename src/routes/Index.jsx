import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="gameBtns">
      <Link to="/game-start" state={{ mode: "single player" }}>
        <button id="singlePlayer">Single Player</button>
      </Link>
      <Link to="/game-start" state={{ mode: "multiplayer" }}>
        <button id="multiPlayer">Multiplayer</button>
      </Link>
    </div>
  );
};

export default Index;
