import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export function NotFound() {
  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Page Not Found</h1>
      <button onClick={handleHomeRedirect}>Go to Home</button>
    </div>
  );
}
