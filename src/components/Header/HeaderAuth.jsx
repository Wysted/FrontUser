import { FaSuitcase, FaQuestionCircle } from "react-icons/fa";
import Logo from "../Logo/index"; // Importa componentes desde archivos separados
import NavItem from "./NavItem";

import "./Header.css";

const HeaderAuth = () => {
    return (
        <header className="header">
            <div className="left-section">
                <Logo />
                <NavItem
                    icon={<FaSuitcase />}
                    text="Paquetes"
                />
                <NavItem
                    icon={<FaQuestionCircle />}
                    text="Ayuda"
                />
            </div>
        </header>
    );
};
export default HeaderAuth;
