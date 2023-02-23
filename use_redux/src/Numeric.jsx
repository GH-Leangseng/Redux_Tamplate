import {useDispatch , useSelector} from 'react-redux';
import { Plus_Number } from './CreateRedux/CreateSlice.js/Slice';
import React from 'react'

const Numeric = () => {
  const number = useSelector(state=> state.counter.number);
  const dispatch = useDispatch();
  return (
    <>
    <div>Numeric {number}</div>
    <button onClick={()=>{dispatch(Plus_Number(10000))}}>+10000</button>
    <button onClick={()=>{dispatch(Plus_Number(100001))}}>+100001</button>
    <button onClick={()=>{dispatch(Plus_Number(100001))}}>+100001</button>
    </>
  )
}

export default Numeric