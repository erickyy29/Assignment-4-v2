import './App.css';
import HeronFormula from './components/HeronFormula';
import AmbigCase from './components/AmbigCase';
import NewtonFormula from './components/NewtonFormula';
import PolynomialFunction from './components/PolynomialFunction';

function App() {
  return (
    <div className="formula-grid">
      <HeronFormula />
      <AmbigCase />
      <NewtonFormula />
      <PolynomialFunction />
    </div>
  );
}

export default App;
