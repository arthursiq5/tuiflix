import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Main from './pages/Main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={() => <div>Not found</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
