import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./product.jsx";
import MsgBox from "./msgBox.jsx";
import ProductTab from "./productTab.jsx";
import LikeBtn from "./likeBtn.jsx";
import TodoList from "./todolist.jsx";
import Lotery from "./lotery.jsx";
import DashBoard from "./DashBoard.jsx";
import Counter from "./usestate.jsx";   
import { Link } from "react-router-dom";

const App = () => {
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<DashBoard />} />
        //         <Route path="/lottery" element={<Lotery />} />
        //         <Route path="/todo" element={<TodoList />} />
        //         <Route path="/counter" element={<Counter />} /> 
                
        //     </Routes>
        // </BrowserRouter>
        <Counter />

    )
}
export default App;
