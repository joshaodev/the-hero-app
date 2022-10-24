import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

import "./Profile.css";

export function Profile() {
  const navigate = useNavigate();
  const [incidents, setIncidents] = useState([]);

  const ongName = JSON.parse(localStorage.getItem("ongName"));
  const ongId = JSON.parse(localStorage.getItem("ongId"));

  const handleLogout = () => {
    localStorage.removeItem("ongName");
    localStorage.removeItem("ongId");

    navigate("/");
  };

  const handleDeleteIncident = async (id) => {
    try {
      await api.delete(`/incidents/${id}`);
      setIncidents(incidents.filter((incident) => Number(incident.id) !== id));
    } catch (error) {
      alert("Error ao deletar caso, tente novamente.");
      console.log(error);
    }
  };

  useEffect(() => {
    api.get("/incidents").then((response) => {
      const filteredIncidents = response.data.filter(
        (incidents) => Number(incidents.ong_id) === ongId
      );
      setIncidents(filteredIncidents);
      //console.log("Filtered : ", filteredIncidents);
    });
  }, [ongId]);

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero Logo" />
        <span>Bem vinda, {ongName}</span>

        <button onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <div className="list-header">
        <h1>Casos cadastrados</h1>
        <Link to="/incidents/new" className="button">
          Cadastrar novo caso
        </Link>
      </div>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <div className="info-block">
              <strong>Caso:</strong>
              <p>{incident.title}</p>
            </div>

            <div className="info-block">
              <strong>Descrição:</strong>
              <p>{incident.description}</p>
            </div>

            <div className="info-block">
              <strong>Valor:</strong>
              <p>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(incident.value)}
              </p>
            </div>

            <button onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
