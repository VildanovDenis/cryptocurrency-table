import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setNewsDataAction } from '../../store/action/coins-action.js';

import TableHeaderComponent from '../tableHeader/index.jsx';
import TableBodyComponent from '../tableBody/index.jsx';

class TableContainer extends React.Component {
    constructor(props) {
        super(props);

        this.updateCoinsPrice = this.updateCoinsPrice.bind(this);
    };

    updateCoinsPrice(msg) {
        const { coins } = this.props;

        // Парсит данные в объект
        const newData = JSON.parse(msg.data);
        // Собирает ключи данных
        const newDataKeys = Object.keys(newData);
        // Создает объект из массива, в котором ключ = id
        const coinsToObj = coins.reduce((acc, coin) => {
            return {...acc, [coin.id]: coin}
        }, {});
        // Массив, проходит по массиву ключей новых данных и заменяет цену в текущих данных
        for (let i = 0; i < newDataKeys.length; i++) {
            coinsToObj[newDataKeys[i]].priceUsd = newData[newDataKeys[i]];
        }
        // Создает массив данных
        const newCoins = Object.values(coinsToObj);

        this.props.setNewsDataAction(newCoins)
    }

    componentDidMount() {
        const URL = 'https://api.coincap.io/v2/assets?limit=15';
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                const newCoins = data.data;

                this.props.setNewsDataAction(newCoins)

                const socketIds = newCoins.reduce((acc, coin) => {
                    return acc +`${coin.id},`
                }, '');

                return socketIds.slice(0, -1);
            })
            .then(socketIds => {
                const pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${socketIds}`);
                pricesWs.onmessage = this.updateCoinsPrice;

            })
            .catch(err => console.log(err));
    }

    render() {
        const { coins } = this.props;
        return (
            <React.Fragment>
                <div className='coins-table-wrapper'>
                    <table className='coins-table'>
                        <TableHeaderComponent />
                        <TableBodyComponent coins={coins}/>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      coins: state.coinsReducer.coins
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        setNewsDataAction: setNewsDataAction
    },
    dispatch
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TableContainer);