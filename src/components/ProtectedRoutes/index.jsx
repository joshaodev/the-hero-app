import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoutes({ children }) {
  const ongId = JSON.parse(localStorage.getItem("ongId"));
  if (!ongId) {
    return <Navigate to="/" />;
  }

  console.log(ongId);
  return children ? children : <Outlet />;
}
