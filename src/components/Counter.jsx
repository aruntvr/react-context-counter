import { useState } from 'react';
import { useCounter } from '../stores/useCounter';

function Counter(props) {
    const { counter, increase, decrease, reset, set } = useCounter();
    const [step, setStep] = useState(1);
    const [setValue, setSetValue] = useState('');

    const onIncrease = () => increase(Number(step));
    const onDecrease = () => decrease(Number(step));
    const onReset = () => reset();
    const onSet = () => {
        const parsed = Number(setValue);
        if (!Number.isNaN(parsed)) set(parsed);
    };

    return (
        <>
            <h1 aria-live="polite">{counter}</h1>
            <div>
                <label htmlFor="step">Step: </label>
                <input id="step" type="number" value={step} onChange={(e) => setStep(e.target.value)} min="1" />
            </div>
            <div>
                <button aria-label="Increase counter" onClick={onIncrease}>Increase</button>
                <button aria-label="Decrease counter" onClick={onDecrease}>Decrease</button>
                <button aria-label="Reset counter" onClick={onReset}>Reset</button>
            </div>
            <div>
                <label htmlFor="setValue">Set value: </label>
                <input id="setValue" type="number" value={setValue} onChange={(e) => setSetValue(e.target.value)} />
                <button aria-label="Set counter value" onClick={onSet}>Set</button>
            </div>
        </>
    );
}

export default Counter;