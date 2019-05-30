import React from 'react';

function TableHeaderComponent() {
    return(
        <thead>
            <tr className='coins-table__header'>
                <th className="coins-table__cell align-left">Название</th>
                <th className="coins-table__cell align-right">Стоимость</th>
                <th className="coins-table__cell coins-table__cell--mobile-none">Рыночная капитализация</th>
                <th className="coins-table__cell coins-table__cell--mobile-none">Суточный объем</th>
            </tr>
        </thead>
    )
}

export default TableHeaderComponent;