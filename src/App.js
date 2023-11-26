
import './App.css';
import { useState, useEffect } from 'react';
import player2 from "./player2.jpeg";
import player1 from "./player1.jpg";
function App() {
  const [player, setPlayer] = useState(1);
  const [board, setBoard] = useState({
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
  })
  const [winner, setWinner] = useState(null);

  const checkWinner = () => {

      const symbol = player === 1 ? "❤️" : "🤍";

      if (board[1] === symbol && board[2] === symbol && board[3] === symbol) {
          setWinner(player);
      }

      else if (board[4] === symbol && board[5] === symbol && board[6] === symbol) {
          setWinner(player);
      }

      else if (board[7] === symbol && board[8] === symbol && board[9] === symbol) {
          setWinner(player);
      }

      else if (board[1] === symbol && board[4] === symbol && board[7] === symbol) {
          setWinner(player);
      }

      else if (board[2] === symbol && board[5] === symbol && board[8] === symbol) {
          setWinner(player);
      }

      else if (board[3] === symbol && board[6] === symbol && board[9] === symbol) {
          setWinner(player);
      }
      else if (board[1] === symbol && board[5] === symbol && board[9] === symbol) {
          setWinner(player);
      }

      else if (board[3] === symbol && board[5] === symbol && board[7] === symbol) {
          setWinner(player);
      }
      setPlayer(player === 1 ? 2 : 1);
  }

  const play = (boxNo) => {
      if (board[boxNo] !== "" || winner !== null) {
          return;
      }

      if (player === 1) {
          setBoard({ ...board, [boxNo]: "❤️" })
      }
      else {
          setBoard({ ...board, [boxNo]: "🤍" })
      }

  }

  const reset = () => {
      setPlayer(1);
      setBoard({
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
          6: "",
          7: "",
          8: "",
          9: "",
      })
      setWinner(null);
  }
  useEffect(() => {
      checkWinner(player);
  }, [board])
  return (
   <>
   <div>
 <div className='nav'>
 <h1 className='heading'> TiC taC toE</h1>
 </div>

   <div className='player-container'>
    <span className='players-title'>
      Player 1: ❤️
    </span>

    <p className='play-turn'>Player Turn : {player === 1 ? "🤍" : "❤️"}</p>
    <span className='players-title'>
      Player 2: 🤍
    </span>
   </div>
   {
      winner ? (
      <h3 className='winner-text'>Winner is {winner === 1 ? " Player 1❤️" : " Player 2🤍"}</h3>
                        ) : null
                        
                }
<div className='container'>
<div>
        <img className='player-img' src={player1} />
      </div>
<div className='board'>
  
<div className='row'>
  <div className='box' onClick={() => { play(1) }}>{board[1]}</div>
  <div className='box' onClick={() => { play(2) }}>{board[2]}</div>
  <div className='box' onClick={() => { play(3) }}>{board[3]}</div>
</div>
<div className='row'>
  <div className='box' onClick={() => { play(4) }}>{board[4]}</div>
  <div className='box' onClick={() => { play(5) }}>{board[5]}</div>
  <div className='box' onClick={() => { play(6) }}>{board[6]}</div>
</div>
<div className='row'>
  <div className='box' onClick={() => { play(7) }}>{board[7]}</div>
  <div className='box' onClick={() => { play(8) }}>{board[8]}</div>
  <div className='box' onClick={() => { play(9) }}>{board[9]}</div>
</div>

</div>
<div>
        <img className='player-img' src={player2} />
      </div>
      </div>
<button type='button' onClick={reset} className='reset-btn'>Reset Game</button>

   </div>
  
   </>
  );
}

export default App;
