import React from "react";
import ReactDOM from "react-dom/client";

import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";

import ErrorPage from "./layout/errorPage";

import "./styles/main.scss";

import App from "./app";

// Router
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);