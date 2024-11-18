import './PolynomialFunction.css';
import { useState } from 'react';

function PolynomialFunction() {

    const [coeff, setCoeff] = useState("");
    const [exp, setExp] = useState("");
    const [x, setX] = useState(0);
    const [polynomial, setPolynomial] = useState("Press Calulate");
    const [evaluation, setEvaluation] = useState("Press Calulate");

    function polynomialFunction(e) {
        e.preventDefault();

        const coeffArray = coeff.split(' ').map(Number);
        const expArray = exp.split(' ').map(Number);
        let expression = ["f(x) = ", 0];

        coeffArray.forEach((c, i) => {
            if (i > 0) {
                expression[0] += (c >= 0 ? " + " : " - ");
            }

            expression[0] += Math.abs(c) === 1 && expArray[i] !== 0 ? "" : Math.abs(c);
            expression[0] += expArray[i] === 0 ? "" : expArray[i] === 1 ? "x" : `x^${expArray[i]}`;
            expression[1] += c * (x ** expArray[i]);
        });

        setPolynomial(expression[0]);
        setEvaluation(`f(${x}) = ${expression[1].toFixed(2)}`);
    }

    return (
        <form onSubmit={(e) => polynomialFunction(e)}>
            <h1>Polynomial Function</h1>
            <label>Coefficients (space-seperated):</label>
            <input type="text" value={coeff} onChange={(event) => { setCoeff(event.target.value) }} required />

            <label>Exponents (space-seperated):</label>
            <input type="text" value={exp} onChange={(event) => { setExp(event.target.value) }} required />

            <label>x value:</label>
            <input type="number" value={x} onChange={(event) => { setX(event.target.value) }} required />

            <label>Polynomial Function (Result):</label>
            <input type="text" value={polynomial} readOnly />

            <label>Polynomial Evaluation (Result):</label>
            <input type="text" value={evaluation} readOnly />

            <input type="submit" value="Calculate" />
        </form>
    )
}

export default PolynomialFunction;