import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import "./NewIncident.css";

export function NewIncident() {
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
        <form>
          <input type="text" name="name" placeholder="Titulo do caso" />
          <textarea name="description" placeholder="Descrição"></textarea>
          <input type="number" name="" id="email" placeholder="E-mail" />

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
