import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [teste, setTeste] = useState('')

  const callApi = async () => {
    const response = await fetch('/api/mensagem');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  useEffect(() => {
    callApi()
    .then(res => setTeste({ response: res.express }))
    .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {teste.response}
        </p>
      </header>
    </div>
  );
}

export default App;
