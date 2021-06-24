﻿import React from "react";
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import '../CSS/Nav.css';

function Nav() {
    return (
        <div>
            <Fade top>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="nav mx-auto">
                                <li className="nav-item">
                                    <Link to="/"><button type="button" className="btn btn-primary">Listagem de Usuários</button></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Cadastro"><button type="button" className="btn btn-primary">Cadastre-se</button></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fade>
        </div>
    )
}

export default Nav;