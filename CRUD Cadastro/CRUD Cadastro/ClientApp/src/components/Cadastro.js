import React, { Component } from "react";
import '../CSS/cadastro.css';
import Nav from './Nav'
import CamposCadastro from './CamposCadastro'
import Zoom from 'react-reveal/Zoom';

class Cadastro extends Component {
    static displayName = "Pessoas";

    constructor(props) {
        super(props);
        this.intialize();

        this.HandleSignUp = this.HandleSignUp.bind(this);
    }

    async intialize() {

        this.state = { title: "Create", pessoa: [] };
    }

    HandleSignUp(event) {
        event.preventDefault();

        const datax = new FormData(event.target);
        fetch('api/Pessoa/', { method: 'POST', body: datax });
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="container-md">
                    <div>
                        <h3>Cadastro</h3>
                        <form onSubmit={this.HandleSignUp}>
                            <CamposCadastro />
                            <Zoom bottom>
                                <button id="btnSignUp" type="submit" className="btn btn-primary">Cadastrar</button>
                            </Zoom>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cadastro;