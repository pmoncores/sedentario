import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          EDITE <code>src/App.js</code> e salve para recarregar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Testando acesso AWS AMplify via Cloudflare
        </a>
      </header>
   
      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <form>
        <input type="text" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />
      </form>
    

    </div>
     );
}

export default App;
