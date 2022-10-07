import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index'

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
    <h1>Increment/Decrement Counter</h1>

    <div className='container'>
      <button onClick={() => dispatch(decNumber())}>-</button>
      <p>{myState}</p>
      <button onClick={() => dispatch(incNumber())}>+</button>
    </div>
    </div>
  );
}

export default App;
