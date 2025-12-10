import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer
  },
});
