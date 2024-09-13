import React, { useState } from 'react';
import './App.css';

function App() {
  const numeros = [7,8,9,4,5,6,1,2,3,0];
  const operacoes = ['/', '*', '-', '+'];

  const [resultado, setResultado] = useState('');
  const [num1, setNum1] = useState(null);
  const [operacao, setOperacao] = useState(null);

  const Botao1 = ({ botaoName, onClick }) => (
    <button className='BotaoNumero' onClick={onClick}>{botaoName}</button>
  );
  
  const Botao2 = ({ botaoName, onClick }) => (
    <button className='BotaoOperacao' onClick={onClick}>{botaoName}</button>
  );

  const numeroClicado = (numero) =>{
    setResultado(prev => prev + numero);
  };

  const operacaoClicada = (op) =>{
    if (resultado !== ''){
      setNum1(parseFloat(resultado));
      setOperacao(op);
      setResultado('');
    };
  };

  const igualClicado = () =>{
    if (num1 !== null && operacao !== null && resultado !== ''){
      const num2 = parseFloat(resultado);

      const resultadoOperacao = operacao === '+' ? num1 + num2:
                                operacao === '-' ? num1 - num2:
                                operacao === '*' ? num1 * num2:
                                operacao === '/' ? num1 / num2:
                                null;

      setResultado(resultadoOperacao !== null ? 
        resultadoOperacao.toString(): 'erro');
      setNum1(null);
      setOperacao(null);
    }
  };

  return (
    <div className="App">
      <input type='text' className='Resultado' value={resultado} readOnly/> 
      <div className='ContainerBotao'>
      {numeros.map (numero =>(
        <Botao1 
        key={numero} 
        botaoName={numero} 
        onClick={() => numeroClicado(numero)}/>
      )) }
      <Botao2 botaoName={'AC'} onClick={() => setResultado('')}/>
      <Botao2 botaoName={'='} onClick={() => igualClicado()}/>
      </div>
      <div className='CotainerBotaoOperacao'>
        {operacoes.map (operacao =>(
          <Botao2 
            key={operacao} 
            botaoName={operacao} 
            onClick={() => operacaoClicada(operacao)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
