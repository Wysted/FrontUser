import "./Order.css";
import Menu from "../Menu/index";
import { getPedidos } from "../../api/orderApi";
import { useEffect, useState, useContext } from "react";
import Article from "./Article";
import { AuthContext } from "../../context/AuthContext";
function Order() {
    const {tokenCookie} = useContext(AuthContext);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPedidos(tokenCookie);
            setOrder(data.misReservas);
        };

        fetchData();
    }, []);
    const ordersArray = Object.values(order);
    return (
        <div className="container">
            <Menu />
            <div className="content">
                <h1 className="content-tittle">Pedidos</h1>
                <div className="container-article">
                    
                </div>
            </div>
        </div>
    );
}

export default Order;
