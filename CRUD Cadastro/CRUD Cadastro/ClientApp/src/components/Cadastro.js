import React, { Component } from "react";
import '../CSS/cadastro.css';
import Nav from './Nav'
import Zoom from 'react-reveal/Zoom';

class Cadastro extends Component {
    static displayName = "Pessoas";

    constructor(props) {
        super(props);
        this.intialize();

        this.HandleSignUp = this.HandleSignUp.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    async intialize() {

        this.state = { login: '' };
        this.state = { password: '' };
    }

    handleLoginChange(e) {
        this.setState({ login: e.target.value });
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    HandleSignUp(event) {
        event.preventDefault();

        const datax = new FormData(event.target);

        fetch('api/Pessoa/', { method: 'POST', body: datax }).then(response => response.json()).then(data => {

            const login = new FormData()

            login.append('Login[Id]', 0);
            login.append('Login[LoginNome]', this.state.login);
            login.append('Login[Senha]', this.state.password);
            login.append('Login[Pessoa_id]', data.id);

            fetch('api/Login/', { method: 'POST', body: login });
        })

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="container-md">
                    <div>
                        <h3>Cadastro</h3>
                        <Zoom top>
                            <form onSubmit={this.HandleSignUp}>
                                <div id="textFields">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <input className="form-control" id="LoginCampo" type="text" name="loginNome" placeholder="Login" onChange={this.handleLoginChange} required />
                                            <input className="form-control" id="SenhaCampo" type="password" name="senha" placeholder="Senha" onChange={this.handlePasswordChange} required />
                                        </div>
                                        <div className="col">
                                            <input className="form-control" id="NomeCampo" type="text" name="nome" placeholder="Nome" required />
                                            <input className="form-control" id="CPFCampo" type="text" name="cpf" placeholder="CPF" required />
                                            <input className="form-control" id="TelCampo" type="text" name="cel" placeholder="Telefone" />
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col">
                                        </div>
                                        <div className="col">
                                            <input className="form-control" id="CEPCampo" type="text" name="cep" placeholder="CEP" />
                                            <input className="form-control" id="enderecoCampo" type="text" name="endereco" placeholder="Endereco" />
                                            <input className="form-control" id="CidadeCampo" type="text" name="cidade" placeholder="Cidade" />
                                            <input className="form-control" id="EstadoCampo" type="text" name="estado" placeholder="Estado" />
                                        </div>
                                    </div>
                                </div>
                                <button id="btnSignUp" type="submit" className="btn btn-primary">Cadastrar</button>
                            </form>
                        </Zoom>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cadastro;