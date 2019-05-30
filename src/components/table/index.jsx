import React from 'react';

import TableHeaderComponent from '../tableHeader/index.jsx';

class TableContainer extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <table className='coins-table'>
                <TableHeaderComponent/>
                <tbody>
                    <tr>
                        <td>12345</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default TableContainer;