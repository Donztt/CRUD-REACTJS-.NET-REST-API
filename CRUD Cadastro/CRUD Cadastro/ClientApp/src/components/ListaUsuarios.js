import React, { Component } from "react";
import Nav from './Nav'
import '../CSS/cadastro.css';
import Fade from 'react-reveal/Fade';

class ListaUsuarios extends Component {
    static displayName = "Pessoas";

    constructor() {
        super();
        this.state = { Pessoa: [] }
    }

    componentDidMount() {
        this.populaPessoasData();
    }

    async populaPessoasData() {
        const response = await fetch('api/Pessoa');
        const data = await response.json();
        this.setState({ Pessoa: data });
    }

    static HandleChangeUser(id) {

        window.location.href = "/AlteracaoDeDados/" + id;
    }

    static renderPessoasTabela(Pessoa) {

        return (
            <div>
                <Fade top>
                    <div id="tableItens">
                        <table className='table table-dark' aria-labelledby="tabelLabel" >
                            <thead>
                                <tr>
                                    <th>NOME</th>
                                    <th>CPF</th>
                                    <th>CIDADE</th>
                                    <th>ESTADO</th>
                                    <th>ENDERECO</th>
                                    <th>TELEFONE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Pessoa.map((Pessoa) =>
                                    <tr id="PeopleList" key={Pessoa.id} onClick={(id) => this.HandleChangeUser(Pessoa.id)}>
                                        <td>{Pessoa.nome}</td>
                                        <td>{Pessoa.cpf}</td>
                                        <td>{Pessoa.cidade}</td>
                                        <td>{Pessoa.estado}</td>
                                        <td>{Pessoa.endereco}</td>
                                        <td>{Pessoa.cel}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </Fade>
            </div>
        );
    }

    render() {
        let contents = ListaUsuarios.renderPessoasTabela(this.state.Pessoa);

        return (
            <div>
                <Nav />
                <div className="container-md">
                    <h3>Listagem de Pessoas Cadastradas no sistema</h3>
                    {contents}
                    <p>*Clique sobre o item que deseja alterar ou excluir da lista de usuários!</p>
                </div>
            </div>
        );
    }
}

export default ListaUsuarios;