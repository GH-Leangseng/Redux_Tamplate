import { configureStore } from "@reduxjs/toolkit";
import Slice from '../CreateRedux/CreateSlice.js/Slice'
export default configureStore({
        reducer : { 
                counter: Slice 
        },
})