import './App.css';
import {useState} from 'react';

function App() {

  const [points, setPoints] = useState([]);
  const [popped, setPopped] = useState([]);

  function handlePlaceCircle(e){
    const {clientX, clientY} = e;

    setPoints([...points, {
      x: clientX,
      y: clientY
    }]);
  }

  function handleUndo(){
    const newPoints = [...points];
    const poppedPoint = newPoints.pop();
    if(!poppedPoint) return;
    setPopped([...popped, poppedPoint]);
    setPoints(newPoints);
  }

  function handleRedo(){
    const newPopped = [...popped];
    const poppedPoint = newPopped.pop();
    if(!poppedPoint) return;
    setPoints([...points, poppedPoint]);
    setPopped(newPopped);
  }

  return (
    <>
      <button className='controls' onClick={handleUndo}
      disabled={points.length === 0}>Undo</button>
      <button className='controls' onClick={handleRedo}
      disabled={popped.length === 0} >Redo</button>

      <div className="App" onClick={handlePlaceCircle}>
        {points.map(point => 
          <div className='point' style={{top:point.y, left: point.x}}>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
