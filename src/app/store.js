// import {configureStore}from '@reduxjs/toolkit';
// import carReducer from"../features/car/carSlice"

// export const store=configureStore({
//     reducer:{
//         car:carReducer
//     },
// });





import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice"; // ✅ Ensure correct path

export const store = configureStore({
  reducer: {
    car: carReducer, // ✅ Ensure this matches `state.car`
  },
});






