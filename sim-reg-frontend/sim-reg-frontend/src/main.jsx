import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import RegisterAdmin from "./components/RegisterAdmin.jsx";
import RequestPage from "./components/RequestPage.jsx";
import HomePage from "./components/HomePage.jsx";
import DocumentPage from "./components/DocumentPage.jsx";
import UploadPage from "./components/UploadPage.jsx";
import UserRequest from "./components/UserRequest.jsx";
import HomeAdmin from "./components/HomeAdmin.jsx";
import Home from "./components/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <HomePage />,
  },
  {
    path: "/admin",
    element: <HomeAdmin />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/register",
    element: <RegisterPage />,
  },
  {
    path: "/admin/register",
    element: <RegisterAdmin />,
  },
  {
    path: "/admin/requests",
    element: <RequestPage />,
  },
  {
    path: "/auth/document",
    element: <DocumentPage />,
  },
  {
    path: "/auth/upload-document",
    element: <UploadPage />,
  },
  {
    path: "/auth/requests",
    element: <UserRequest />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
