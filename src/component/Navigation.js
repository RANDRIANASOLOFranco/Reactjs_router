import React from "react";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li><NavLink to = "/">Accueil</NavLink></li>
                    <li><NavLink to = "/Contact">Contact</NavLink></li>
                    <li><NavLink to = "/Apropos">Apropos</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}
export default Navigation;
  