import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { findAllByTestId } from '@testing-library/react';



function PrazoMes(props){
  var monName = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL","AGO","SET", "OUT", "NOV", "DEZ"];
  var dt = new Date();
  var estado = ["EM DIA", "EM ATRASO"];

if(props.num < dt.getMonth){
  return "Fatura  " +monName[props.num]+' '+estado[1];
}else{
  return "Fatura  " +monName[props.num]+' '+estado[0];
}
}

function NumCPF(props){
return props.cpf;
}

function ByteComsunido(props){
  return props.comsumo;
}

function HoraConsumo(){
var dt4 = new Date();
  return dt4.getHours();
}

function DataConsumo(){
  var dt5 = new Date();
  return dt5.getDate()+"/"+dt5.getMonth()+"/"+dt5.getFullYear();
}

function Mega(props){
  return props.mb;
}

function Valor(props){
  return 'R$'+props.val;
}

function Vencimento(props){
   return props.venc;
}

function SemanaDia(props){
  var semana = ["DOMINGO", "SEGUNDA", "TERÇA","QUARTA", "QUINTA","SEXTA", "SÁBADO"];
  var dt = new Date();
  semana[dt.getDay]=props.s;
  return semana[props.s];
}

function Pagamento(){
  return alert("Pagamento Eftuado com Sucesso!");
}

ReactDOM.render(
  <DataConsumo/>, document.getElementById('data')
);

ReactDOM.render(
  <HoraConsumo/>, document.getElementById('hora')
);

ReactDOM.render(
  <ByteComsunido comsumo={258.85}/>, document.getElementById('Byteconsumo')
);

ReactDOM.render(
   <NumCPF cpf={"117.852.963-85"}/>, document.getElementById('cpf')
);
ReactDOM.render(
  <PrazoMes num={2}/>,   document.getElementById('mesAno')
);

ReactDOM.render(
  <Mega mb={2.66}/>,      document.getElementById('MegaUsado')
);
ReactDOM.render(
  <Valor val={45.96}/>,   document.getElementById('valor')  
);
ReactDOM.render(
  <Vencimento venc={"05/20"}/>, document.getElementById('vencimento')
);

ReactDOM.render(
  <SemanaDia s={4}/>, document.getElementById('semana')
);

ReactDOM.render(
  <button onClick={Pagamento}>Efetuar Pagamento</button>, document.getElementById('EfeutarPgto')
);

serviceWorker.unregister();
