import React, { Component } from "react";
import '../CSS/cadastro.css';
import Nav from './Nav'
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom'

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
                <div class="container register">
                    <div class="row">
                        <div class="col-md-3 register-left">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="" />
                            <h3>Já possui conta?</h3>
                            <p>Faça seu login agora!</p>
                            <Link to="/Login"><input type="submit" name="" value="Login" /><br /></Link>
                        </div>
                        <div class="col-md-9 register-right">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <h3 class="register-heading">Faça seu cadastro</h3>
                                    <form onSubmit={this.HandleSignUp}>
                                        <div class="row register-form">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="nome" placeholder="Nome *" required />
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" minlength="11" maxlength="11" class="form-control" name="cpf" placeholder="CPF *" required />
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="loginNome" placeholder="Usuario *" onChange={this.handleLoginChange} required />
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" class="form-control" name="senha" placeholder="Senha *" onChange={this.handlePasswordChange} required />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" minlength="8" maxlength="8" class="form-control" name="cep" minlength="8" maxlength="8" placeholder="CEP" />
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="cidade" placeholder="Cidade" />
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="estado" placeholder="Estado" />
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="endereco" placeholder="Endereco" />
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" minlength="10" maxlength="10" name="cel" class="form-control" placeholder="Telefone" />
                                                </div>
                                            </div>
                                            <input type="submit" class="btnRegister" value="Cadastrar" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cadastro;