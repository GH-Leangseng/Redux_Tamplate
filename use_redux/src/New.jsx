import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increaseData,decreasMent,Plus_Number } from '../src/CreateRedux/CreateSlice.js/Slice'
import Numeric from './Numeric'
const New = () => {
        const dis1 = useDispatch();
        const num = useSelector(state=>state.counter.number);
  return (
  
        <>
          <h1>this Component New {num} </h1>
         
          <button onClick={()=>{dis1(Plus_Number(1000))}}>+1000</button> 

          <h2>This component Numberic</h2>
          <Numeric/>
        </>
  
  )
}

export default New