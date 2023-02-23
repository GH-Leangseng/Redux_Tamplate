import { createSlice} from '@reduxjs/toolkit';

export const Slice =  createSlice({
        name: 'counter',
        initialState: {
                number : 0
        },
        reducers:{
                increaseData : (state)=>{
                        state.number++;
                },
                decreasMent : (state)=>{
                        state.number--;
                },
                Plus_Number : (state, action)=>{
                        state.number +=action.payload
                }
        }
}) 

export const { increaseData ,decreasMent ,Plus_Number} = Slice.actions;
export default Slice.reducer; 