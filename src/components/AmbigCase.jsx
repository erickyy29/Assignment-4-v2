import './AmbigCase.css';
import { useState } from 'react';

function AmbigCase() {
    const [angleA, setAngleA] = useState(0);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [result, setResult] = useState("Press Calculate");

    function ambigCase(e) {
        e.preventDefault();

        const angleARad = angleA * (Math.PI / 180);
        const h = b * Math.sin(angleARad); 

        let finalResult;

        if (angleA <= 0 || angleA >= 180) {
            finalResult = "Invalid Angle"; 
        } else if (angleA === 90) {
            finalResult = a === b ? "Right Triangle" : "No Triangle";
        } else if (angleA < 90) {
            if (a < h) {
                finalResult = "No Triangle";
            } else if (a === h) {
                finalResult = "Right Triangle";
            } else if (a > h && a < b) {
                finalResult = "Two Triangles (Ambiguous Case)";
            } else if (a >= b) {
                finalResult = "One Triangle";
            } else {
                finalResult = "No Triangle";
            }
        } else {
            if (a <= b) {
                finalResult = "No Triangle";
            } else {
                finalResult = "One Triangle";
            }
        }

        setResult(finalResult);
    }

    return (
        <form onSubmit={(e) => ambigCase(e)}>
            <h1>Ambiguous Case</h1>
            <label>Angle A (degrees):</label>
            <input
                type="number"
                min="1"
                max="179"
                value={angleA}
                onChange={(event) => setAngleA(parseFloat(event.target.value))}
                required
            />

            <label>Side a:</label>
            <input
                type="number"
                min="0"
                value={a}
                onChange={(event) => setA(parseFloat(event.target.value))}
                required
            />

            <label>Side b:</label>
            <input
                type="number"
                min="0"
                value={b}
                onChange={(event) => setB(parseFloat(event.target.value))}
                required
            />

            <label>Triangle Type (Result):</label>
            <input type="text" value={result} readOnly />

            <input type="submit" value="Calculate" />
        </form>
    );
}

export default AmbigCase;
