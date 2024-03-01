import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../src/App.tsx";
import HomePage from "./Pages/HomePages.tsx";
import NotesPage from "./Pages/NotesPage.tsx";
import NoPage from "./Pages/NoPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/note", element: <NotesPage /> },
      { path: "*", element: <NoPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
