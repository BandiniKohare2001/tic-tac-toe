
import './App.css';
import { useState } from 'react';

function App() {
  const [player, setPlayer] = useState(1)
  return (
   <>
   <div>
   <img className='heading' src='https://4.bp.blogspot.com/-UGd-nOoMK5g/WBd6ICqoumI/AAAAAAAAHXI/_6oeNhPtdHUqi6iUStCLvUvDUGV1S82VQCLcB/s1600/tttmarqlrg.gif' />

   <div className='player-container'>
    <span className='players-title'>
      Player 1:
    </span>

    <span>
      Player 2:
    </span>
   </div>
<div className='board'>
  
<div className='row'>
  <div className='box'></div>
  <div className='box'></div>
  <div className='box'></div>
</div>
<div className='row'>
  <div className='box'></div>
  <div className='box'></div>
  <div className='box'></div>
</div>
<div className='row'>
  <div className='box'></div>
  <div className='box'></div>
  <div className='box'></div>
</div>
</div>
   </div>
   </>
  );
}

export default App;
