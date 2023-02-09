import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login, logout } from '../store/user';

export const useCheckAuth = () => {
  const { status } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    handleSession();
  }, []);

  const handleSession = () => {
    const session = sessionStorage.getItem('session');

    if (!session) return dispatch(logout());

    dispatch(login(JSON.parse(session)));
  };

  return status;
};
