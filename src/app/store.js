import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnerSlice';
import { promotionsReducer} from '../features/promotions/promotionsSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    promotions: promotionsReducer,
    partners: partnersReducer
  },
});
