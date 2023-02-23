// import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increaseData , decreasMent , Plus_Number } from './CreateRedux/CreateSlice.js/Slice';

function App() {
  const getdatafromredux = useSelector((state)=>state.counter.number);
  const dis = useDispatch();
  return (
    <div className="App">
    <h1>{getdatafromredux}</h1>
      <button onClick={()=>{dis(increaseData())}}>+1</button>
      <button onClick={()=>{dis(decreasMent())}}>-1</button>
      <button onClick={()=>{dis(Plus_Number(100))}}>100</button>
    </div>
  )
}

export default App
