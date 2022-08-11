import { createSlice } from '@reduxjs/toolkit';
import { factsList } from './data';

const initialState = {
  value: 0,
  facts: [],
};

export const factsSlice = createSlice({
  name: 'factsCount',
  initialState,
  reducers: {
    increment: (state) => {
      state.value < 10 ? (state.value += 1) : (state.value = 10);
      state.facts = factsList.filter((fact) => fact.id <= state.value);
    },
    decrement: (state) => {
      state.value > 0 ? (state.value -= 1) : (state.value = 0);
      state.facts = factsList.filter((fact) => fact.id <= state.value);
      console.log(state.value);
    },
    showTheAmount: (state, action) => {
      state.value = action.payload;
      state.facts = factsList.filter((fact) => fact.id <= state.value);
    },
  },
});

export const { increment, decrement, showTheAmount } = factsSlice.actions;

export const selectCount = (state) => state.facts.value;
export const selectFacts = (state) => state.facts.facts;

export default factsSlice.reducer;
