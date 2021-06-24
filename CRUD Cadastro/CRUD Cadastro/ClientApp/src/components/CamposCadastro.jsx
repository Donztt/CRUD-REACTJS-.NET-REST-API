import React from "react";

function CamposCadastro() {
    return (
        <div id="textFields">
            <div className="row align-items-center">
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
        )
}

export default CamposCadastro