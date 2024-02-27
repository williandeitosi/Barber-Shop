import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./routes/LoginUser.jsx";
import Register from "./routes/Register.jsx";
import Servicos from "./routes/Servicos.jsx";
import Calender from "./routes/Calender.jsx";
import Schedule from "./routes/Schedule.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "servicos",
    element: <Servicos />,
  },
  {
    path: "calender",
    element: <Calender />,
  },
  {
    path: "agenda",
    element: <Schedule />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
