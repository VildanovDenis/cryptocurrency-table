import { createStore, combineReducers } from 'redux';

import { coinsReducer } from './reducer/coins-reducer.js';

const allReducers = combineReducers({
    coinsReducer
})

export const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)