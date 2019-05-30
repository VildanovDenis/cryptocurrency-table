import React from 'react';

function TableBodyComponent({coins}) {
    return (
        <tbody>
            {coins.map(coin => {
                const {id, name, symbol, priceUsd, marketCapUsd, volumeUsd24Hr} = coin;

                const fixedPrice = Number(priceUsd).toFixed(2)
                const price = Number(fixedPrice).toLocaleString('ru');

                const marketCapToBil = Number(marketCapUsd) / 1000000000;
                const marketCap = marketCapToBil.toFixed(2);

                const volumeCapToBil = Number(volumeUsd24Hr) / 1000000000;
                const volume = volumeCapToBil.toFixed(2);

                return (
                    <tr className='coins-table__row-content' key={id}>
                        <td className='coins-table__cell coins-table__cell--name'>
                            {name}
                            <span className="f12">{symbol}</span>
                        </td>
                        <td className='coins-table__cell'>${price}</td>
                        <td className='coins-table__cell'>${marketCap} млрд.</td>
                        <td className='coins-table__cell'>${volume} млрд.</td>
                    </tr>
                )}
            )}
        </tbody>
    )
}

export default TableBodyComponent;