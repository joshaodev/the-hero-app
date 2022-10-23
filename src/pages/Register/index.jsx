import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import "./Register.css";

export function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero Logo" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link to="/logon" className="back-link">
            <FiArrowLeft />
            Voltar para o logon
          </Link>
        </section>
        <form>
          <input type="text" name="name" id="name" placeholder="Nome da ONG" />
          <input type="email" name="email" id="email" placeholder="E-mail" />
          <input
            type="text"
            name="whatsup"
            id="whatsup"
            placeholder="Whatssup"
          />
          <div className="input-group">
            <input type="text" name="city" id="city" placeholder="Cidade" />
            <input
              type="text"
              name="uf"
              id="uf"
              placeholder="UF"
              style={{ width: 80 }}
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
