import React, { useState } from 'react';
import "./style.css";
import Results from "./Results";
import Fieldset from "../Fieldset";


const Form = ({ currencies, divButtons, }) => {

    const [amount, setAmount] = useState("");
    const [currencyFrom, setCurrencyFrom] = useState("PLN");
    const [currencyTo, setCurrencyTo] = useState("EUR");
    const [result, setResult] = useState("");

    const calculateResult = (amount, valueFrom, valueTo) => amount * valueFrom / valueTo;

    const onFormSubmit = (event) => {
        event.preventDefault();

        const valueFrom = currencies.find(({ name }) => name === currencyFrom);
        const valueTo = currencies.find(({ name }) => name === currencyTo);
        const result = calculateResult(amount, valueFrom.value, valueTo.value);
        setResult({ amount: amount, currencyFrom: valueFrom.id, value: result, currencyTo: valueTo.id });
        setAmount("");
    };

    return (
        <>
            <form className="form" onSubmit={onFormSubmit}>
                <Fieldset>
                    <>
                        < label >
                            "Wybierz walutę do przeliczenia:"
                            <select
                                value={currencyFrom}
                                onChange={({ target }) => setCurrencyFrom(target.value)}
                                name="currencyFrom"
                                className="form__field form__field--background"
                                required
                            >
                                {currencies.map(currency => (
                                    <option key={currency.id}>
                                        {currency.name}
                                    </option>
                                ))}
                            </select>
                        </label >
                        < label >
                            "Wybierz walutę do przeliczenia:"
                        <select
                                value={currencyTo}
                                onChange={({ target }) => setCurrencyTo(target.value)}
                                name="currencyTo"
                                className="form__field form__field--background"
                                required
                            >
                                {currencies.map(currency => (
                                    <option key={currency.id}>
                                        {currency.name}
                                    </option>
                                ))}
                            </select>
                        </label >
                    </>
                    <label>Wpisz kwotę
                    <input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            type="number"
                            className="form__field"
                            min="0.01"
                            required
                            step="0.01"
                        />
                    </label>
                </Fieldset>
                {divButtons}
                <Results
                    result={result}
                    amount={amount} />
            </form>

        </>
    );
};

export default Form;