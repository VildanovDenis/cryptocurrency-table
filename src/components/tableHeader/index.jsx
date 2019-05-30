import React from 'react';

import tableHeader from './tableHeaderData.js';

function TableHeaderComponent() {
    return(
        <thead>
            <tr className='coins-table__header'>
                {tableHeader.map(cell => {
                    return (
                    <th className='coins-table__cell' key={cell}>{cell}</th>
                    )}
                )}
            </tr>
        </thead>
    )
}

export default TableHeaderComponent;