import './App.css';
import { useCounter } from './useCounter';

function App() {
  const {counter, increase, decrease, restart} = useCounter();
  
  return (
    <div className="App">
      {counter}
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={restart}>restart</button>
    </div>
    )
}



export default App;
