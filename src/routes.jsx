import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { Logon } from "./pages/Logon";
import { NewIncident } from "./pages/NewIncident";
import { NotFound } from "./pages/NotFound";
import { Profile } from "./pages/profile";
import { Register } from "./pages/Register";

export function MappedRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/logon" />} />
        <Route path="/logon" element={<Logon />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/incidents/new" element={<NewIncident />} />
        </Route>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
