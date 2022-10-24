import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";
import api from "../../services/api";

import "./Logon.css";

export function Logon() {
  const navigate = useNavigate();
  const [id, setId] = useState();

  const handleLogon = async (e) => {
    e.preventDefault();

    try {
      const response = await api.get("ongs");
      const ong = response.data.find((ong) => ong.id === Number(id));

      localStorage.setItem("ongId", JSON.stringify(ong.id));
      localStorage.setItem("ongName", JSON.stringify(ong.name));

      navigate("/profile");
    } catch (error) {
      alert("Falha no login, tente novamente.");
    }
  };

  return (
    <div className="logon-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero Logo" />
          <form onSubmit={handleLogon}>
            <h1>Faça seu Logon</h1>
            <input
              type="text"
              placeholder="Sua ID"
              onChange={(e) => setId(e.target.value)}
            />
            <button type="submit" className="button">
              Entrar
            </button>
            <Link to="/register" className="back-link">
              <FiLogIn />
              Não tenho cadastro
            </Link>
          </form>
        </section>
        <img src={heroesImg} alt="Heroes Image" />
      </div>
    </div>
  );
}
