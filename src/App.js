import Login from './Login';
import './App.css';
import Alert from './Alert';

function App() {
  const showAlert = false;
  return (
    <div>
      <h1>Desafío - Estado de los componentes y eventos</h1>
      <Login></Login>
      {showAlert ? (
        <Alert/>
      ) : null}
    </div>
  );
}

export default App;
