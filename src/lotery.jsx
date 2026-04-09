import { useState } from "react";   

export default function Lotery() {
    const [number, setNumber] = useState(0);
    const [message, setMessage] = useState("");

    const randomNumber = () => {
        const num = Math.floor(Math.random() * 1000);
        setNumber(num);
    }

    const lotery =() => {
        if (number > 500 ? setMessage("Congratulations! You won the lotery!") : setMessage("Sorry, Try again!"));
        
    }
    return(
        <>
        <button onClick={randomNumber}>Click to get number</button>
        <h1>{number}</h1>
        <button onClick={lotery}>Check the lottery</button>
        <p>{message}</p>
        </>
    )


}