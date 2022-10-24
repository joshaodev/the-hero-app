import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

import "./Register.css";

export function Register() {
  const navigate = useNavigate();

  const [ong, setOng] = useState({
    name: "",
    email: "",
    whatsapp: "",
    city: "",
    uf: "",
  });

  const clearFields = () => {
    setOng({
      name: "",
      email: "",
      whatsapp: "",
      city: "",
      uf: "",
    });
  };

  const handleChange = (e) => {
    setOng({ ...ong, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("ongs", ong);

      alert(`Seu ID de acesso: ${response.data.id}`);
      clearFields();
      navigate("/logon");
    } catch (error) {
      alert("Erro no cadastro, tente novamente.");
    }

    console.log(ong);
  };

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero Logo" />
          <h1>Cadastrar ONG</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link to="/logon" className="back-link">
            <FiArrowLeft />
            Voltar para o logon
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Nome da ONG"
            required
            onChange={handleChange}
            value={ong.name}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            onChange={handleChange}
            value={ong.email}
          />
          <input
            type="text"
            name="whatsapp"
            placeholder="Whatsapp"
            onChange={handleChange}
            value={ong.whatsapp}
          />
          <div className="input-group">
            <input
              type="text"
              name="city"
              placeholder="Cidade"
              required
              onChange={handleChange}
              value={ong.city}
            />
            <input
              type="text"
              name="uf"
              placeholder="UF"
              style={{ width: 80 }}
              onChange={handleChange}
              value={ong.uf}
            />
          </div>
          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
