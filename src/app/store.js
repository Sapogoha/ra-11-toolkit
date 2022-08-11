import { configureStore } from '@reduxjs/toolkit';
import factsReducer from '../features/facts/factsSlice';

export const store = configureStore({
  reducer: {
    facts: factsReducer,
  },
});
