import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Portfolio = lazy(() => import('../pages/portfolio'));
const SecretSanta = lazy(() => import('../pages/secret-santa'));
const ConnectWallet = lazy(() => import('../pages/connect-wallet'));

const publicRoutesConfig: RouteObject = {
  path: '/',
  children: [
    {
      index: true,
      element: <ConnectWallet />
    },
    {
      path: '/secret-santa',
      element: <SecretSanta />
    },
  ]
};

export const routesConfig: RouteObject[] = [publicRoutesConfig];
