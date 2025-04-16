import { useState } from 'react';
import axios from 'axios';

function ConsultaDDD() {
  const [ddd, setDdd] = useState('');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');

  const buscarDDD = () => {
    setErro('');
    setResultado(null);

    if (!ddd) {
      setErro('Digite um DDD');
      return;
    }

    if (ddd.length !== 2) {
      setErro('Digite um DDD válido de 2 dígitos');
      return;
    }

    axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
      .then((res) => setResultado(res.data))
      .catch(() => setErro('DDD não encontrado.'));
  };

  return (
    <div className="consulta-box">
      <h4>Consulta DDD</h4>
      <input
        type="text"
        placeholder="Digite o DDD"
        value={ddd}
        onChange={(e) => setDdd(e.target.value)}
      />
      <button onClick={buscarDDD}>Buscar</button>
      {erro && <p>{erro}</p>}
      {resultado && (
        <pre>{JSON.stringify(resultado, null, 2)}</pre>
      )}
      <p><strong>Exemplos de DDD:</strong></p>
      <ul>
        <li>11 (São Paulo)</li>
        <li>21 (Rio de Janeiro)</li>
        <li>31 (Belo Horizonte)</li>
      </ul>
    </div>
  );
}

export default ConsultaDDD;
