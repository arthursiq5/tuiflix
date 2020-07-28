import React from 'react';
import Logo from '../assets/img/logo.png';

import './Menu.css';

export default function Menu(){
    return (
        <nav>
            Tuiflix
            <img className="logo" src={Logo} alt="TuiFlix logo" />
        </nav>
    );
}