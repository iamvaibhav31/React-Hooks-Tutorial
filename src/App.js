import Statetut1 from "./components/usestate/Statetut1";
import Statetut2 from "./components/usestate/Statetut2"; 
import Reducertut1 from "./components/usereducer/Reducertut1";
import Effecttut1 from "./components/useEffect/Effecttut1";
import Effecttut2 from "./components/useEffect/Effecttut2";
import Effecttut3 from "./components/useEffect/Effecttut3";
import Reftut1 from "./components/useRef/Reftut1";
import Reftut2 from "./components/useRef/Reftut2";
import ImperativeHandle from "./components/useImperativeHandle/ImperativeHandletut.js";

function App() {
  return (
    <div className="App">
      <p><strong>Hooks Tutorial</strong></p>
      <p>-----------------------------------------------------------------------------------------</p> 
      <p><strong>1. useState Hooks Tutorials</strong></p>
      <p>-----------------------------------------------------------------------------------------</p> 
      <Statetut1/>
      <p>-----------------------------------------------------------------------------------------</p>
      <Statetut2/>
      <p>-----------------------------------------------------------------------------------------</p>
      <p><><strong>2. useReducer Hooks Tutorials</strong></></p>
      <p>-----------------------------------------------------------------------------------------</p>
      <Reducertut1/>
      <p>-----------------------------------------------------------------------------------------</p>
      <p><><strong>3. useEffect Hooks Tutorials</strong></></p>
      <p>-----------------------------------------------------------------------------------------</p>
      <Effecttut1/>
      <p>-----------------------------------------------------------------------------------------</p>
      <Effecttut2/>
      <p>-----------------------------------------------------------------------------------------</p>
      <Effecttut3/>
      <p>-----------------------------------------------------------------------------------------</p>
      <p><strong>4. useRef Hooks Tutorials</strong></p>
      <p>-----------------------------------------------------------------------------------------</p>
      <Reftut1/>
      <p>-----------------------------------------------------------------------------------------</p>
      <Reftut2/>
      <p>-----------------------------------------------------------------------------------------</p>
      <p><strong>5. useImperativeHandle Hooks Tutorials</strong></p>
      <p>-----------------------------------------------------------------------------------------</p>
      <ImperativeHandle/>
    </div>
  );
}

export default App;
