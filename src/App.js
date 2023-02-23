import { useEffect, useState } from 'react';
import './App.css';
import Square from './Components/Square.jsx'

const initilState = ["","","","","","","","",""]
function App() {
  const [gameState,setGameState] = useState(initilState)
  const [clicks,setClicks] = useState(0)
  const [winner,setWinner] = useState(null)

useEffect(()=>{
  checkForWinner(gameState)
},[gameState])
  const onClickHandler =(e)=>{
    const state = [...gameState]
   if(!e.target.innerText){
    state[e.target.id] = clicks % 2 === 0 ? "X" : "O";
    setClicks(clicks + 1)
    setGameState(state)
   }
  }
 const restart =()=>{
  setGameState(initilState)
  setClicks(0)
  setWinner(null)
 }

 const checkForWinner =(gameState)=>{
  const winningPlaces = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[0,4,8],[2,4,6],[2,5,8]
  ]
  winningPlaces.forEach(condition =>{
  const [a,b,c] = condition;
   if(gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]){
     setWinner(gameState[a])
   }
  })
 }

  return (
    <div className="App">
    <div className='header'>
    <h1>Let's play the Tic-Tac-Toe Game !</h1>
    <button onClick={restart}>Start a New Game</button>
    </div>
    {!winner && clicks < 9 && (
      <div className='players-game'>
      <div className='players'>
      <div className={`player ${clicks % 2 === 0 && 'player-X'}`}>player-X</div>
      <div className={`player ${clicks % 2 === 1 && 'player-O'}`}>player-O</div>
    </div>
    <div className='game' onClick={onClickHandler}>
    <Square id={0} state={gameState[0]} className='border-right-bottom'/>
    <Square id={1} state={gameState[1]} className='border-right-bottom'/>
    <Square id={2} state={gameState[2]} className='border-bottom'/>
    <Square id={3} state={gameState[3]} className='border-right-bottom'/>
    <Square id={4} state={gameState[4]} className='border-right-bottom'/>
    <Square id={5} state={gameState[5]} className='border-bottom'/>
    <Square id={6} state={gameState[6]} className='border-right'/>
    <Square id={7} state={gameState[7]} className='border-right'/>
    <Square id={8} state={gameState[8]} />
    </div>
      </div>
     
    )}
    {(winner || clicks === 9) && (
      <div className='winner'>
      
       <div className='winner-text'>{clicks === 9 && !winner ? "Its a Draw":`${winner} Win!`}</div>
      </div>
    )}
    
    </div>
  );
}

export default App;
