import "./Order.css";
import Menu from "../Menu/index";
import { getPedidos } from "../../api";
import { useEffect, useState, useContext } from "react";
import Article from "./Article";
import { AuthContext } from "../../context/AuthContext";
function Order() {
    const { tokenCookie } = useContext(AuthContext);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPedidos(tokenCookie);
            setOrder(data);
        };
        fetchData();
    }, [tokenCookie]);

    return (
        <div className="container">
            <Menu />
            <div className="content">
                <h1 className="content-tittle">Pedidos</h1>
                <div className="container-article">
                    {order.lenght > 0 ? "hay pedidos" : "no tiene pedidos"}
                </div>
            </div>
        </div>
    );
}

export default Order;
