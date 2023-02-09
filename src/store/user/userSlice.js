import { createSlice } from '@reduxjs/toolkit';

export const STATUS = ['checking', 'authenticated', 'not-authenticated'];

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: STATUS[0],
    api_key: null,
    email: null,
    first_name: null,
    last_name: null,
    errorMessage: null
  },
  reducers: {
    checkingCredentials: state => {
      state.status = STATUS[0];
    },
    login: (state, { payload }) => {
      state.status = STATUS[1];
      state.api_key = payload.api_key;
      state.email = payload.email;
      state.first_name = payload.first_name;
      state.last_name = payload.last_name;
      state.errorMessage = null;

      sessionStorage.setItem('session', JSON.stringify(state));
    },
    logout: (state, { payload }) => {
      state.status = STATUS[2];
      state.email = null;
      state.first_name = null;
      state.last_name = null;
      state.errorMessage = payload?.errorMessage;
      sessionStorage.clear();
    }
  }
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = userSlice.actions;
