import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

import "./Logon.css";

export function Logon() {
  return (
    <div className="logon-container">
      <section>
        <img src={logoImg} alt="Be the Hero Logo" />
        <form>
          <h1>Faça seu Logon</h1>
          <input type="text" placeholder="Sua ID" />
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
  );
}
