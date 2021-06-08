import React from 'react';
import {NavLink} from "react-router-dom"

const Nav = () => {
    return (
        <div className="Nav">
            <NavLink exact to = "/">
            Accueil
            </NavLink>
            <NavLink exact to = "Login">
            Connexion
            </NavLink>

            
        </div>
    );
};

export default Nav;