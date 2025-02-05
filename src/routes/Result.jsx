import {Link, useLocation} from 'react-router-dom';
import {useEffect} from 'react';

const Result = () => {
    const location = useLocation();
    const {winner} = location.state;

    return (
        winner=="X" ?
        <>
            <Link to ="/game-start"><img src="/x-symbol.png" className="slideIn"></img></Link>
            <Link to ='/game-start'>
                <div className = "winnerMessageX scale">WINNER!</div>
            </Link>
        </>
        : 
        <>
        <Link to ="/game-start"><img src="/o-symbol.png" className="slideIn"></img></Link>
        <Link to ='/game-start'>
            <div className = "winnerMessageO scale">WINNER!</div>
        </Link>
    </>
    )
}

export default Result;