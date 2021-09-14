import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function App() {
  const [age, setAge] = useState(0);
  const [result, setResult] = useState(0);

  function calculate(e) {
    e.preventDefault();
    setResult((220-age) * 0.85)
    // setResult((220-age) * 0.65)
  }

  return (
    <form onSubmit={calculate}>
      <h3>Heart rate limits calculator</h3>
      <div>
        <label>Age</label>
        <input type="number" step="0.01"
          onChange={e => setAge(e.target.value)}
          value={age}/>
      </div>
      <div>
        <label>Heart rate limits</label>
        <input type="number" 
          onChange={e => setResult(e.target.value)}
          value={result}/>
      </div>
      <div>
      <button type="button" class="btn btn-primary">Calculate</button>
      </div>
    </form>
  );
}

export default App;
