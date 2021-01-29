import QZStock from "./QZStock";
import defaults from './defaults'
class QZStockWidget extends QZStock{
    constructor(option) {
        super();
        this.option = {...defaults, ...option}
        // 图表渲染
        this.chartRender()
    }

    /**
     * chart主配置进行合并
     * @param {object} defaultOption 默认配置
     * @param {object} option 用户设置的配置
     * @return {object} 合并后产生的新配置
     *
     * */
    configOptionMerge = (defaultOption = {}, option) => {
        if (!option || JSON.stringify(option) ==='{}') return defaultOption
        const targetDefaultOption = JSON.parse(JSON.stringify(defaultOption))
        const targetOption = JSON.parse(JSON.stringify(option))
        let cache = {}
        for (let i in targetOption) {
            const mergeBool =
                Object.prototype.toString.call(targetOption[i]) === '[object Object]' ||
                (Array.isArray(targetOption[i] && targetOption[i].length && typeof targetOption[i].length[0] === 'object'))
            if (mergeBool) {
                cache[i] = this.configOptionMerge(targetDefaultOption[i] || {}, targetOption[i])
            }else {
                cache[i] = targetOption[i] === 'undefined' ? targetDefaultOption[i] : targetOption[i]
            }
        }
        return {...targetDefaultOption, ...cache}
    }

    /**
     * 图表渲染
     *
     * */
    chartRender = () => {
        const {option, Highcharts} = this
        const {defaultChartConfigOption, chartConfigOption, containerID} = option
        if (!containerID) {
            throw new Error('挂载节点id不存在')
        }
        this.containerNode = document && document.getElementById(containerID)
        if (this.containerNode) {
            // chart主配置进行合并
            this.chartConfigOption = this.configOptionMerge(defaultChartConfigOption, chartConfigOption)
            // 图表初始化函数
            Highcharts.chart(containerID, this.chartConfigOption);
        } else {
            setTimeout(() => {
                this.chartRender()
            }, 500)
        }

    }
}

export default QZStockWidget