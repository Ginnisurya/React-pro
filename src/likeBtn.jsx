import  "./App.css";
import { useState } from "react";


export default function LikeBtn() {
    const [like, setLiked] = useState(false);
    const [count, setCount] = useState(0);


    const toggle = () => {
        setLiked(true)   // once clicked → always full heart
        setCount(count + 1)
        Data = fetch("")
    };

    const toggle2 = () => {
        setLiked(false)
        setCount(0)
    }



    return (
        <div className="like-btn">
            <p onDoubleClick={toggle} onClick={toggle2} >
                {like ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                <span>{count}</span>
                <p></p>
            </p>
        </div>


    )
}
