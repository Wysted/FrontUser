import "./Data.css";
export default function Acces({ children, email }) {
    return (
        <div className="container_data">
            <div className="info_box">
                <div className="info_item">
                    <label>Correo</label>
                    <span>{email}</span>
                </div>
                <div className="info_item">
                    <label>Contraseña</label>
                    <span>******</span>
                </div>
            </div>
            <div className="button_data">{children}</div>
        </div>
    );
}
