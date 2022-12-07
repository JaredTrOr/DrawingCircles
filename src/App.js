import './App.css';
import {useState} from 'react';

function App() {

  const [points, setPoints] = useState([]);

  function handlePlaceCircle(e){
    const {clientX, clientY} = e;

    setPoints([...points, {
      x: clientX,
      y: clientY
    }]);
  }

  return (
    <div className="App" onClick={handlePlaceCircle}>
      {points.map(point => 
        <div className='point' style={{top:point.y, left: point.x}}>
        </div>
      )}
    </div>
  );
}

export default App;
