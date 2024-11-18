import './HeronFormula.css';
import { useState } from 'react';

function HeronFormula() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [area, setArea] = useState("Press Calulate");

  function heronFormula(e) {
    e.preventDefault();
    setArea((0.25 * Math.sqrt(4 * a * a * b * b - Math.pow(a * a + b * b - c * c, 2))).toFixed(2));
  }

  return (
    <form onSubmit={(e) => heronFormula(e)}>
      <h1>Heron's Formula</h1>
      <label>Side a:</label>
      <input type="number" min="0" value={a} onChange={(event) => { setA(event.target.value) }} required />

      <label>Side b:</label>
      <input type="number" min="0" value={b} onChange={(event) => { setB(event.target.value) }} required />

      <label>Side c:</label>
      <input type="number" min="0" value={c} onChange={(event) => { setC(event.target.value) }} required />

      <label>Area (Result):</label>
      <input type="text" value={area} readOnly />

      <input type="submit" value="Calculate" />
    </form>
  )
}

export default HeronFormula;