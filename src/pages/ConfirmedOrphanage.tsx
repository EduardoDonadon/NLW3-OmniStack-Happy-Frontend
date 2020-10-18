import React from 'react';
import { Link } from 'react-router-dom';

import confirmedImg from '../images/confirmed.svg';

import '../styles/pages/confirmed-orphanage.css';

function ConfirmedOrphanage() {

    return (
        <div id="page-confirmed-orphanage">
            <div className="content-wrapper">
                <div className="main">
                    <h1>Ebaaa!</h1>
                    <p>O cadastro foi realizado!</p>
                    <Link to="/app" className="enter-map">
                        Voltar para o mapa
                    </Link>
                </div>
                <div className="image">
                    <img src={confirmedImg} alt="Happy"/>
                </div>
            </div>
        </div>
    )
};

export default ConfirmedOrphanage;
