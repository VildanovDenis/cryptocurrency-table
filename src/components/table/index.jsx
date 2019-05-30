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
        const headers = {
            method: "GET",
            mode: "cors",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json"
            }
        };

        fetch(URL, headers)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        // const URL = 'https://api.coincap.io/v2/assets?limit=15'
        // this.fetchData(URL);
        const jsonData = '{"data":[{"id":"bitcoin","rank":"1","symbol":"BTC","name":"Bitcoin","supply":"17730962.0000000000000000","maxSupply":"21000000.0000000000000000","marketCapUsd":"155153761268.4930228778744512","volumeUsd24Hr":"6960211478.7373037806661086","priceUsd":"8750.4423769276039776","changePercent24Hr":"1.1707844561639608","vwap24Hr":"8688.2093578468421190"},{"id":"ethereum","rank":"2","symbol":"ETH","name":"Ethereum","supply":"106281502.8741000000000000","maxSupply":null,"marketCapUsd":"30227651321.6548869693933492","volumeUsd24Hr":"3067957163.8313694234558692","priceUsd":"284.4112145973533973","changePercent24Hr":"5.7693236521273298","vwap24Hr":"276.6379784921519186"},{"id":"ripple","rank":"3","symbol":"XRP","name":"XRP","supply":"42116677673.0000000000000000","maxSupply":"100000000000.0000000000000000","marketCapUsd":"19596604830.8363878392404004","volumeUsd24Hr":"1141858245.1359238439063264","priceUsd":"0.4652932261890948","changePercent24Hr":"5.5078664473211872","vwap24Hr":"0.4524576965595229"},{"id":"bitcoin-cash","rank":"4","symbol":"BCH","name":"Bitcoin Cash","supply":"17810212.5000000000000000","maxSupply":"21000000.0000000000000000","marketCapUsd":"8311923437.5781329564941638","volumeUsd24Hr":"597241020.4897343937742036","priceUsd":"466.6942316144814643","changePercent24Hr":"5.2831893141867209","vwap24Hr":"462.6360674573998612"},{"id":"eos","rank":"5","symbol":"EOS","name":"EOS","supply":"917030056.5860000000000000","maxSupply":null,"marketCapUsd":"7417884563.5255949982316930","volumeUsd24Hr":"1110793981.7411955050989399","priceUsd":"8.0890310085817109","changePercent24Hr":"2.0083907218613106","vwap24Hr":"8.0685959712010873"},{"id":"litecoin","rank":"6","symbol":"LTC","name":"Litecoin","supply":"61999801.4371839000000000","maxSupply":"84000000.0000000000000000","marketCapUsd":"7283162739.9361919504541124","volumeUsd24Hr":"978169135.5216086538374601","priceUsd":"117.4707429880278873","changePercent24Hr":"2.3770635929102541","vwap24Hr":"116.3520330546522258"},{"id":"binance-coin","rank":"7","symbol":"BNB","name":"Binance Coin","supply":"141175490.2420000000000000","maxSupply":null,"marketCapUsd":"4762377005.8396199625785956","volumeUsd24Hr":"298055670.6218673993778440","priceUsd":"33.7337380424608787","changePercent24Hr":"1.0789460733591178","vwap24Hr":"33.8922022914311410"},{"id":"bitcoin-sv","rank":"8","symbol":"BSV","name":"Bitcoin SV","supply":"17808110.8663738000000000","maxSupply":"21000000.0000000000000000","marketCapUsd":"3759586384.1303450124769005","volumeUsd24Hr":"680277885.0335313393111928","priceUsd":"211.1165194523463642","changePercent24Hr":"44.0111867976010920","vwap24Hr":"202.8141034484141860"},{"id":"tether","rank":"9","symbol":"USDT","name":"Tether","supply":"3115579437.5465700000000000","maxSupply":null,"marketCapUsd":"3114357117.7943445073330992","volumeUsd24Hr":"7293361172.4636872571623240","priceUsd":"0.9996076749841474","changePercent24Hr":"0.0028363053615766","vwap24Hr":"1.0005497038410310"},{"id":"stellar","rank":"10","symbol":"XLM","name":"Stellar","supply":"19300246243.8089000000000000","maxSupply":null,"marketCapUsd":"2741458334.7116979282305879","volumeUsd24Hr":"97196372.6656703612629457","priceUsd":"0.1420426610148095","changePercent24Hr":"3.9972917987432152","vwap24Hr":"0.1379982735856541"},{"id":"cardano","rank":"11","symbol":"ADA","name":"Cardano","supply":"25927070538.0000000000000000","maxSupply":"45000000000.0000000000000000","marketCapUsd":"2496083043.6068410184486310","volumeUsd24Hr":"134276625.8535972175694720","priceUsd":"0.0962732384265495","changePercent24Hr":"6.5139668681260091","vwap24Hr":"0.0929229431489923"},{"id":"tron","rank":"12","symbol":"TRX","name":"TRON","supply":"66682072191.4000000000000000","maxSupply":null,"marketCapUsd":"2347657453.3379623108676529","volumeUsd24Hr":"395053257.7653294227131749","priceUsd":"0.0352067261287171","changePercent24Hr":"5.1030864908273773","vwap24Hr":"0.0343340887304093"},{"id":"monero","rank":"13","symbol":"XMR","name":"Monero","supply":"17011810.3369741000000000","maxSupply":null,"marketCapUsd":"1648651822.3588514236773339","volumeUsd24Hr":"41865219.6460836064868657","priceUsd":"96.9121915717347472","changePercent24Hr":"3.4345441293970074","vwap24Hr":"94.8123456678890357"},{"id":"dash","rank":"14","symbol":"DASH","name":"Dash","supply":"8833541.2837867300000000","maxSupply":"18900000.0000000000000000","marketCapUsd":"1577957128.5272549243656635","volumeUsd24Hr":"636266147.2341769622058296","priceUsd":"178.6324507729953195","changePercent24Hr":"4.5364389392636106","vwap24Hr":"174.5040874568109130"},{"id":"cosmos","rank":"15","symbol":"ATOM","name":"Cosmos","supply":"239291889.0000000000000000","maxSupply":null,"marketCapUsd":"1503782081.7265399633989948","volumeUsd24Hr":"99895662.0365169184135908","priceUsd":"6.2843002661345532","changePercent24Hr":"36.6593901060279836","vwap24Hr":"5.4009853831905335"}],"timestamp":1559216104248}';
        const data = JSON.parse(jsonData).data;
        this.setState({
            coins: data
        })
    }

    render() {
        const { coins } = this.state;
        return (
            <table className='coins-table'>
                <TableHeaderComponent />
                <TableBodyComponent coins={coins}/>
            </table>
        )
    }
}

export default TableContainer;