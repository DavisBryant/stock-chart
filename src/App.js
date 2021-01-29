import React from 'react'
import QZStock  from './QZStock'
import TestData from './QZStock/mock'
import optionConfig from './QZStock/testOpt'
import './App.css'

class App extends React.PureComponent {
    componentDidMount() {
        var data = TestData
        var ohlc = [],
            volume = [],
            dataLength = data.length,
            // set the allowed units for data grouping
            groupingUnits = [[
                'week',                         // unit name
                [1]                             // allowed multiples
            ], [
                'month',
                [1, 2, 3, 4, 6]
            ]],
            i = 0;
        for (i; i < dataLength; i += 1) {
            ohlc.push([
                data[i][0], // the date
                data[i][1], // open
                data[i][2], // high
                data[i][3], // low
                data[i][4] // close
            ]);
            volume.push([
                data[i][0], // the date
                data[i][5] // the volume
            ]);
        }
        const aaaa = new QZStock().Highcharts.getOptions().colors[0]
        const QZStockChart = new QZStock.Widget({
            containerID: 'highcharts_container',
            lang: 'zh',
            chartConfigOption: {
                ...optionConfig,
                ...{
                    series: [{
                        type: 'candlestick',
                        name: '平安银行',
                        color: 'green',
                        lineColor: 'green',
                        upColor: 'red',
                        upLineColor: 'red',
                        tooltip: {
                        },
                        navigatorOptions: {
                            color: aaaa
                        },
                        data: ohlc,
                        dataGrouping: {
                            units: groupingUnits
                        },
                        id: 'sz'
                    },{
                        type: 'column',
                        data: volume,
                        yAxis: 1,
                        dataGrouping: {
                            units: groupingUnits
                        }
                    }]
                }
            },
        })

        console.log(QZStockChart);
        QZStockChart.showLoading({
            tip: '',
            delay: 1000,
            autoHide: true,
        })
    }

    render() {
        return <div className='App' id='highcharts_container' style={{width: '1000px', height: '600px',margin: '50px', border: '1px solid #193D37'}} />
    }
}

export default App;
