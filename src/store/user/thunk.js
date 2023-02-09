import { userServices } from '../../services/';

import { checkingCredentials, logout, login } from './';

export const checkingAuthentication = () => {
  return async dispatch => {
    dispatch(checkingCredentials());
  };
};

export const startLogin = ({ email, password }) => {
  const s = {
    email: 'edgar.rudas@groundor.com',
    password: 'user1234'
  };

  return async dispatch => {
    try {
      dispatch(checkingCredentials());

      const result = await userServices.post({ email, password });

      dispatch(login(result.data));
    } catch (error) {
      console.log(error);
      dispatch(logout());
    }
  };
};

export const startLogout = () => {
  return async dispatch => {
    dispatch(logout());
  };
};
