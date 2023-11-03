import logo from './logo.svg';
import './App.css';
import C01componente from './componentes/C01componente';
import C02contador from './componentes/C02contador';
import Variables from './componentes/C04variable';
import C06matriz from './componentes/C06matriz';
import C07matrizOperaciones from './componentes/C07matrizOperaciones';

function App() {
  return (
    <div className='App'>
      <h1>Practocas... React</h1>
      <C01componente />
      <hr/>
      <C02contador />
      <hr/>
      <Variables xVariable="Lectura a variables" />
      <hr/>
      <C06matriz />
      <hr/>
      <C07matrizOperaciones />
      <hr/>
    </div>
  );
}

export default App;
