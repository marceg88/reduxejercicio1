import { createStore } from 'redux'

const initialState = { counter: 0, showCounter: true, reset: true }
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        }
    }
    if (action.type === 'Toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter,
        }
    }
    if (action.type === 'reset') {
        return {
            counter: 0,
            showCounter: state.showCounter,
            reset: !state.reset,
        }
    }
    if (action.type === 'de5en5') {
        return {
            counter: state.counter + action.payload,
            showCounter: state.showCounter,
            reset: state.reset,
        }
    }
    return state
}

const store = createStore(counterReducer)

export default store;