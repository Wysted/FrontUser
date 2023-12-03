import Order from "../../Service";
import { useEffect, useContext } from "react";
import { useLocation } from "wouter";
import { AuthContext } from "../../../context/AuthContext";

export default function ProfilePage() {
    const { isAuthenticated } = useContext(AuthContext);
    const [, setLocation] = useLocation(); // 2. Usar el hook useLocation

    useEffect(() => {
        // 2. Usa useEffect
        if (!isAuthenticated) {
            setLocation("/login");
        }
    }, [setLocation, isAuthenticated]);
    return <Order />;
}
