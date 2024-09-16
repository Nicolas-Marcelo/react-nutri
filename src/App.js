import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [nutri, setNutri] = useState([]); 

  useEffect(() => { 
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

    fetch(url) 
      .then((r) => r.json())
      .then((json) => setNutri(json))
  }, []) 

  return (
    <div>
      <header className='cabecalho'>
        <strong>React Nutri</strong>  {/* Deixa negrito a palavra */}
      </header>

      {nutri.map((item) => {
        return (
          <div className='publicacao'>
            <article key={item.id}>
              <img src={item.capa} alt={item.titulo} />
              <strong>{item.titulo}</strong>
              <p>{item.subtitulo}</p>
              <ul>
                <li><a href='App.js'><button type='submit'>Acessar</button></a></li>
              </ul>
            </article> {/* Está função troca as informações pelo oque tem na API*/}
          </div>
        );
      })}
    </div>

  );
}

export default App;
