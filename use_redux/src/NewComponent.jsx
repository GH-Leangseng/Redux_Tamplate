import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increaseData,decreasMent,Plus_Number } from '../src/CreateRedux/CreateSlice.js/Slice'
import New from './New';
const NewComponent = () => {
        const dis13 = useDispatch();
        const num = useSelector((state)=>{state.counter.number});
  return (
    <div>
        <div>NewComponent</div>
        <h1>Number in redux : {num}</h1>
        <button onClick={()=>{dis13(Plus_Number(1000))}}>+1000</button> 
       <New/>
    </div>
  )
}

export default NewComponent