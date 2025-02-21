// import {createSlice} from "@reduxjs/toolkit"
// const initialState={
//     cars:["Model S","Model 3","Model X","Model Y"]
// }
// const carSlice=createSlice({
//     name:"car",
//     initialState,
//     reducers:{}
// })
// export const selectCars=state=>state.car.cars
// export default carSlice.reducer




import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {} // ✅ Reducers can be empty, but make sure this is defined
});

// ✅ Correct selector
export const selectCars = (state) => state.car.cars;

// ✅ Explicitly export the reducer
export default carSlice.reducer;






