import { useState } from 'react';
import axios from 'axios';

function ConsultaIBGE() {
  const [uf, setUf] = useState('');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');

  const buscarCidades = () => {
    setErro('');
    setResultado(null);

    const ufLimpa = uf.trim().toUpperCase();

    if (!ufLimpa || ufLimpa.length !== 2) {
      setErro('Digite a sigla de um estado válida (ex: SP)');
      return;
    }

    axios.get(`https://brasilapi.com.br/api/ibge/municipios/v1/${ufLimpa}`)
      .then((res) => {
        setResultado(res.data);
      })
      .catch(() => setErro('Estado não encontrado ou erro na busca.'));
  };

  return (
    <div className="consulta-box">
      <h4>Consulta Cidades por UF (IBGE)</h4>
      <input
        type="text"
        placeholder="Digite a sigla do estado (ex: SP)"
        value={uf}
        onChange={(e) => setUf(e.target.value)}
      />
      <button onClick={buscarCidades}>Buscar</button>
      {erro && <p>{erro}</p>}
      {resultado && (
        <pre>{JSON.stringify(resultado, null, 2)}</pre>
      )}
      <p><strong>Exemplos de UF:</strong></p>
      <ul>
        <li>SP (São Paulo)</li>
        <li>RJ (Rio de Janeiro)</li>
        <li>MG (Minas Gerais)</li>
      </ul>
    </div>
  );
}

export default ConsultaIBGE;
