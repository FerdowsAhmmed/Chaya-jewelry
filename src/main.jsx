import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Main from './Main/Main';
import Page404 from './ErrorPage/Page404';
import Login from './Pages/Login';
import Registration from './Pages/Registration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "registration",
        element: <Registration></Registration>
      },
      {
        path: "login",
        element: <Login></Login>
      },
    ],
  },
  {
    path: "/*",
    element: <Page404></Page404>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
