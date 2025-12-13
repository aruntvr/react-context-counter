import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RESET, COUNTER_SET } from "../constants/Counter";

const CounterReducer = (state, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT: {
            const step = (action.payload && Number(action.payload)) || 1;
            return { ...state, counter: state.counter + step };
        }
        case COUNTER_DECREMENT: {
            const step = (action.payload && Number(action.payload)) || 1;
            return { ...state, counter: state.counter - step };
        }
        case COUNTER_RESET:
            return { ...state, counter: 0 };
        case COUNTER_SET: {
            const value = Number(action.payload) || 0;
            return { ...state, counter: value };
        }
        default:
            return state;
    }
};

export default CounterReducer;