import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';


function CadastroVideo(){
  return <div>
    Página de cadastro de Vídeo
  </div>
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
