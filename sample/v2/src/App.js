import logo from './logo.svg';
import './App.css';
import {env} from './env';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: env.VITE_COLOR}}>
        <img src={env.VITE_LOGO_URL ?? logo} className="App-logo" alt="logo" />
        <p>
          {
            env.VITE_MAIN_TEXT ??
            <span>Edit your environment variables and restart the application</span>
          }
        </p>
        <a
          className="App-link"
          href={env.VITE_LINK_URL ?? "https://github.com/rafyzg/vite-inject-env#readme"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {env.VITE_LINK_URL ?? "README"}
        </a>
        <div style={{
          marginTop: 24,
          color: 'lightgrey',
          backgroundColor: '#111111',
          display:'flex',
          flexDirection:'column',
          alignItems:'start',
          padding: 16,
          fontSize: 16,
        }}>
          <div style={{textAlign:'left'}}>{`VITE_COLOR: ${env.VITE_COLOR}`}</div>
          <div style={{textAlign:'left'}}>{`VITE_LOGO_URL: ${env.VITE_LOGO_URL}`}</div>
          <div style={{textAlign:'left'}}>{`VITE_MAIN_TEXT: ${env.VITE_MAIN_TEXT}`}</div>
          <div style={{textAlign:'left'}}>{`VITE_LINK_URL: ${env.VITE_LINK_URL}`}</div>
        </div>
      </header>
    </div>
  );
}


export default App;
