
import React from 'react';
import {useNavigate} from "react-router-dom";

function Login({toggleAuth}) {
const navigate = useNavigate();

function handleClick() {
    toggleAuth(true)
    navigate('/')
}

    return(
        <>
        <section>
            <h1>Welkom en log in op deze pagina</h1>
            <p> Log hier in</p>
            <button type="button" onClick={handleClick}>Klik hier</button>
        </section>
        </>
    );

}
export default Login