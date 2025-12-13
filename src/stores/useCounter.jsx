import { useContext, useCallback } from 'react';
import counterStore from './Counter';
import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RESET, COUNTER_SET } from '../constants/Counter';

export function useCounter() {
    const { counterState, counterDispatch } = useContext(counterStore);

    const increase = useCallback((step = 1) => counterDispatch({ type: COUNTER_INCREMENT, payload: step }), [counterDispatch]);
    const decrease = useCallback((step = 1) => counterDispatch({ type: COUNTER_DECREMENT, payload: step }), [counterDispatch]);
    const reset = useCallback(() => counterDispatch({ type: COUNTER_RESET }), [counterDispatch]);
    const set = useCallback((value) => counterDispatch({ type: COUNTER_SET, payload: value }), [counterDispatch]);

    return {
        counter: counterState.counter,
        increase,
        decrease,
        reset,
        set,
    };
}

export default useCounter;
