import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from './user';
// import { companySlice } from './company';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer
    // company: companySlice.reducer
  }
});
