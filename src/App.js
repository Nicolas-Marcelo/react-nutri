import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [nutri, setNutri] = useState([]); /* Usa o estado de componente em uma tag */

  useEffect(() => { /* Está função vai buscar as informações da API no código*/
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

    fetch(url) /* Envia uma requisição para o servidor */
      .then((r) => r.json())
      .then((json) => setNutri(json)) /* Aqui salva o arquivo na váriavel const */
  }, []) /* Aqui acaba a importação da API */

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
      })} {/* É como se fosse um FOR, mas para um arquivo json */}
    </div>

  );
}

export default App;