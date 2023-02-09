import { Navigate, Route, Routes } from 'react-router-dom';

import { useCheckAuth } from '../hooks';

import { Loading, NotFoundPage } from '../components';

import { Login, Dashboard, Company } from '../pages';
import { useMemo } from 'react';

const ROUTES = [
  {
    title: 'Login',
    path: '/login',
    element: <Login />,
    isAuth: false
  },
  {
    title: 'Company',
    path: '/company',
    element: <Company />,
    isAuth: true
  },
  {
    title: 'Dashbooard',
    path: '/',
    element: <Dashboard />,
    isAuth: true
  }
];

export const AppRouter = () => {
  const status = useCheckAuth();

  const isAuthenticated = status === 'authenticated';

  const routes = useMemo(
    () =>
      ROUTES.filter(({ isAuth }) => isAuth === isAuthenticated).map(
        ({ path, element }) => (
          <>
            <Route key={path} path={path} element={element} />
            <Route path='/*' element={<Navigate to={path} />} />
          </>
        )
      ),
    [status]
  );

  if (status === 'checking') return <Loading />;

  return (
    <Routes>
      {/* <Route path='/*' element={<NotFoundPage />} /> */}

      {routes}
    </Routes>
  );
};
