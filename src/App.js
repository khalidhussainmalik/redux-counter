import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Increment/Decrement Counter</h1>

    <div>
      <a className='quantity-minus' title='decrement'><span>-</span></a>
      <input name='quantity' type='text' className='quantity-input' value="0" />
      <a className='quantity-plus' title='increment'><span>+</span></a>
    </div>
    </div>
  );
}

export default App;
