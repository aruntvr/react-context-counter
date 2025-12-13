import { useReducer, createContext, useEffect, useMemo } from "react";
import CounterReducer from "../reducers/Counter";

const STORAGE_KEY = 'react-context-counter-state';
const defaultInitialState = { counter: 0 };
const counterStore = createContext();
const { Provider } = counterStore;

export function CounterProvider({ children, initialValue }) {
    const loadInitialState = () => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) return JSON.parse(raw);
        } catch (e) {
            // ignore
        }
        return typeof initialValue === 'number' ? { counter: initialValue } : defaultInitialState;
    };

    const [counterState, counterDispatch] = useReducer(CounterReducer, undefined, loadInitialState);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(counterState));
        } catch (e) {
            // ignore storage errors
        }
    }, [counterState]);

    const value = useMemo(() => ({ counterState, counterDispatch }), [counterState, counterDispatch]);

    return <Provider value={value}>{children}</Provider>;
}
export default counterStore;