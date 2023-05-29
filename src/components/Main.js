import React, { useState } from "react";

export default function Main() {

    const [state, setState] = useState({
        id: "",
        text: ""
    })


    const generateAdvice = () => {
        fetch(`https://api.adviceslip.com/advice`)
        .then(res => res.json())
        .then(data => setState({
           id: data.slip.id,
           text: data.slip.advice
        }))
    }

    window.addEventListener('load', generateAdvice)
    

    return (
        <main>
            <h1 className="main--header">Advice #{state.id}</h1>

            <p className="main--advice">{state.text}</p>

            <div className="main--divider-container">
                <img className="main--divider" src="./images/pattern-divider-mobile.svg" alt="main divider"/>
                <img className="main--divider-desktop" src="./images/pattern-divider-desktop.svg" alt="main divider"/>
            </div>


            <div className="main--button-container">
                <button onClick={generateAdvice} className="main--button">
                    <img className="main--dice-icon" src="./images/icon-dice.svg" alt="dice icon" />
                </button>
            </div>
            
        </main>
    )
}