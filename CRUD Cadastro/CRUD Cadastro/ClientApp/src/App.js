import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Cadastro from './components/Cadastro';
import ListaUsuarios from './components/ListaUsuarios';
import AlteracaoDados from './components/AlteracaoDados';

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <Switch>
              <Route path='/' exact component={ListaUsuarios} />
              <Route path='/Cadastro' component={Cadastro} />
              <Route path='/AlteracaoDeDados/:id' component={AlteracaoDados} />
          </Switch>
    );
  }
}
