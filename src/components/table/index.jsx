import React from 'react';

import TableHeaderComponent from '../tableHeader/index.jsx';
import TableBodyComponent from '../tableBody/index.jsx';

class TableContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: []
        }
    };

    fetchData(URL) {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                const newCoins = data.data;
                this.setState({
                    coins: newCoins
                })
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        const URL = 'https://api.coincap.io/v2/assets?limit=15'
        this.fetchData(URL);
    }

    render() {
        const { coins } = this.state;
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

export default TableContainer;