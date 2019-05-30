const initialStateCoins = {
    coins: []
}

export const coinsReducer = (state = initialStateCoins, action) => {
    switch(action.type) {
        case 'GET_COINS': {
            const { payload: coins } = action;
            return { ...state, coins }
        }

        default: {
            return state
        }
    }
}