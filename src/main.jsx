import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Contact from './routes/contact';
import ErrorPage from './errorPage';
import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement  : <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);