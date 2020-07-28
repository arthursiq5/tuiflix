import React from 'react';
import Logo from '../assets/img/logo.png'

export default function Menu(){
    return (
        <nav>
            Tuiflix
            <img src={Logo} alt="TuiFlix logo" />
        </nav>
    );
}