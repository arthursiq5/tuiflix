import React from 'react';
import Logo from '../assets/img/logo.png';

import './Menu.css';

export default function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="TuiFlix logo" />
            </a>

            <a className="ButtonLink" href="/">
                Novo vídeo
            </a>
        </nav>
    );
}