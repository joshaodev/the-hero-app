import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import "./NewIncident.css";
import api from "../../services/api";

export function NewIncident() {
  const navigate = useNavigate();
  const ongId = JSON.parse(localStorage.getItem("ongId"));

  const [incident, setIncident] = useState({
    title: "",
    description: "",
    value: "",
    ong_id: ongId,
  });

  const clearFields = () => {
    setIncident({
      title: "",
      description: "",
      value: "",
    });
  };

  const handleChange = (e) => {
    setIncident({ ...incident, [e.target.name]: e.target.value });
  };

  const handleRegisterIncident = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/incidents", incident);

      alert("Caso cadastrado com sucesso!");
      clearFields();
      navigate("/profile");
    } catch (error) {
      alert("Erro ao cadastrar caso, tente novamente.");
    }

    console.log(incident);
  };

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero Logo" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreve o caso detalhadamente para encontrar um heroi para resolver
            isso.
          </p>
          <Link to="/profile" className="back-link">
            <FiArrowLeft />
            Voltar para a home
          </Link>
        </section>
        <form onSubmit={handleRegisterIncident}>
          <input
            type="text"
            name="title"
            placeholder="Titulo do caso"
            onChange={handleChange}
            value={incident.title}
          />
          <textarea
            name="description"
            placeholder="Descrição"
            onChange={handleChange}
            value={incident.description}
          ></textarea>
          <input
            type="number"
            name="value"
            placeholder="Valor em Reais"
            onChange={handleChange}
            value={incident.value}
          />

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
