import React from "react";
import Product from "./product.jsx";
import MsgBox from "./msgBox.jsx";
import ProductTab from "./productTab.jsx";
import LikeBtn from "./likeBtn.jsx";
import TodoList from "./todolist.jsx";
import Lotery from "./lotery.jsx";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate(); // Important to navigate page without refreshing whole page

    return (
        // <>
        //     <button onClick={() => navigate("/lottery")} >
        //         Lottery
        //     </button> <br />
        //     <br />
        //     <br />
        //     <button onClick={() => navigate("/todo")} >
        //         Go to Todo List
        //     </button>
        //         <br />  
        //         <br />

        //     <button onClick={() => navigate("/counter")} >
        //         Go to Counter
        //     </button>

        // </>
        <>
            <h1>Dashboard</h1>

            <br />

            <Link to="/todo">Go to Todo List</Link>

            <br /><br />

            <Link to="/counter">Go to Counter</Link>

            <br /><br />

            <Link to="/lottery">Go to Lottery</Link>
        </>


    );
}

export default Dashboard;