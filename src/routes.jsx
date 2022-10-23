import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Logon } from "./pages/Logon";
import { NewIncident } from "./pages/NewIncident";
import { Profile } from "./pages/profile";
import { Register } from "./pages/Register";

export function MappedRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/logon" element={<Logon />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/incidents/new" element={<NewIncident />} />
      </Routes>
    </BrowserRouter>
  );
}
