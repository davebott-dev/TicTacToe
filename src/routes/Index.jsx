import {Link} from 'react-router-dom';

const Index = () => {
  return (
    <div class="gameBtns">
      <Link to ="/game-start"><button id="singlePlayer" >Single Player</button></Link>
      <Link to ="/game-start"><button id="multiPlayer" >Multiplayer</button></Link>
    </div>
  );
};

export default Index;
