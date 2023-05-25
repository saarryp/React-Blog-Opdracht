import React from 'react';
import './Navigation.css';
import {NavLink, useNavigate} from 'react-router-dom';



function Navigation({isAuth, toggleAuth}) {
    const navigate = useNavigate();

    function signOut(){
        toggleAuth(true)
        navigate('/')
    }

    return(
        <nav>
            <div className="nav-container">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    {isAuth === true ?
                        <>
                    <li>
                        <NavLink to="blogposts">Blogposts</NavLink>
                    </li>
                    <li>
                        <button type="button" onClick={signOut}>Uitloggen
                        </button>
                    </li>
                        </>
                        :
                    <li><NavLink to="/login">Login</NavLink>
                    </li>}
                </ul>
            </div>
        </nav>

    );
}

export default Navigation