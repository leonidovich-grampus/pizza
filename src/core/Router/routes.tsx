import React from "react";


export const ROUTES = {
  ROOT: {
    path: '/',
    element: <>Main</>,
  },
  REGISTER_PAGE: {
    path: '/register',
    element: <>Register</>,
  },
  NOT_FOUND: {
    path: '*',
    element: <>Error</>,
  },
};

