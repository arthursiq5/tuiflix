import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';

export default function CadastroCategoria() {


    const [categorias, setCategorias] = useState(['teste', 'exemplo']);
    const [nomeDaCategoria, setNomeDaCategoria] = useState('');

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

            <form onSubmit={function handleSubmit(event){
                event.preventDefault();
                setCategorias([
                    ...categorias,
                    nomeDaCategoria
                ])
            }}>

            <label>
                Nome da Categoria:
                <input
                type="text"
                value={nomeDaCategoria}
                onChange={((dadosDoEvento) => setNomeDaCategoria(dadosDoEvento.target.value))}
                />
            </label>

            <button>
                Cadastrar
            </button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return <li key={`${categoria} ${index}`}>
                        {categoria}
                    </li>
                })}
            </ul>

            <Link to="/">
            Ir para home
            </Link>
        </PageDefault>
    );
}