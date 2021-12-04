import { useSelector, useDispatch } from "react-redux";

import classes from './Counter.css';

const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter);
    const show = useSelector((state) => state.showCounter)

    const incrementHandler = () => {
        dispatch({ type: 'increment' });
    }
    const decrementHandler = () => {
        dispatch({ type: 'decrement' });
    }
    const toggleCounterHandler = () => {
        dispatch({ type: 'Toggle'})
    };
    const resetCounterHandler = () => {
        dispatch({ type: 'reset' })
    };
    const increment5 = () => {
        dispatch({ type: 'de5en5', payload: 5})
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={increment5}>incremente5</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
            <button onClick={resetCounterHandler}>Reset Counter</button>
        </main>
    )
}

export default Counter;