import React from 'react';
import ButtonLink from '../components/ButtonLink';
import Logo from '../../assets/img/logo.png';
import Button from '../Button';

import './Menu.css';

export default function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="TuiFlix logo" />
            </a>

            <Button as="a" className="ButtonLink" url="/">
                Novo vídeo
            </Button>
        </nav>
    );
}