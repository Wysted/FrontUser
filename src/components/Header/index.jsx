import { FaSuitcase, FaQuestionCircle } from "react-icons/fa";
import Logo from "../Logo/index"; // Importa componentes desde archivos separados
import NavItem from "./NavItem";
import LoginButton from "./LoginButton";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="left-section">
                <img
                    src="/logo.png"
                    alt="Logo"
                    style={{ width: "15%", height: "auto" }}
                />
            </div>
            <LoginButton />
        </header>
    );
};
export default Header;
