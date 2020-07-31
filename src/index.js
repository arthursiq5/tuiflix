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
      <Route exact path="/" component={App} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={() => <div>Not found</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
