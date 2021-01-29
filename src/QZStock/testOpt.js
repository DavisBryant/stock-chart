const options = {
    rangeSelector: {
        selected: 1,
        inputDateFormat: '%Y-%m-%d'
    },
    title: {
        text: '平安银行历史股价'
    },
    xAxis: {
        dateTimeLabelFormats: {
            millisecond: '%H:%M:%S.%L',
            second: '%H:%M:%S',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%m-%d',
            week: '%m-%d',
            month: '%y-%m',
            year: '%Y'
        }
    },
    tooltip: {
        split: false,
        shared: true,
    },
    yAxis: [{
        labels: {
            align: 'right',
            x: -3
        },
        title: {
            text: '股价'
        },
        height: '65%',
        resize: {
            enabled: true
        },
        lineWidth: 2
    }, {
        labels: {
            align: 'right',
            x: -3
        },
        title: {
            text: '成交量'
        },
        top: '65%',
        height: '35%',
        offset: 0,
        lineWidth: 2
    }],
};

export default options;
