import React from 'react';

import './index.css';

import TableContainer from './table/index.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div className="app">
                <TableContainer />
            </div>
        )
    }
}

export default App;