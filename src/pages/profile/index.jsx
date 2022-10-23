import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import "./Profile.css";

export function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero Logo" />
        <span>Bem vinda, APAD</span>

        <Link to="" className="button">
          Cadastrar novo caso
        </Link>
        <button>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        <li>
          <div className="info-block">
            <strong>Caso:</strong>
            <p>Caso Teste</p>
          </div>

          <div className="info-block">
            <strong>Descrição:</strong>
            <p>Descrição Teste</p>
          </div>

          <div className="info-block">
            <strong>Valor:</strong>
            <p>Valor Teste</p>
          </div>

          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <div className="info-block">
            <strong>Caso:</strong>
            <p>Caso Teste</p>
          </div>

          <div className="info-block">
            <strong>Descrição:</strong>
            <p>Descrição Teste</p>
          </div>

          <div className="info-block">
            <strong>Valor:</strong>
            <p>Valor Teste</p>
          </div>

          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <div className="info-block">
            <strong>Caso:</strong>
            <p>Caso Teste</p>
          </div>

          <div className="info-block">
            <strong>Descrição:</strong>
            <p>Descrição Teste</p>
          </div>

          <div className="info-block">
            <strong>Valor:</strong>
            <p>Valor Teste</p>
          </div>

          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <div className="info-block">
            <strong>Caso:</strong>
            <p>Caso Teste</p>
          </div>

          <div className="info-block">
            <strong>Descrição:</strong>
            <p>Descrição Teste</p>
          </div>

          <div className="info-block">
            <strong>Valor:</strong>
            <p>Valor Teste</p>
          </div>

          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
