// 导入需要的模块
import Highcharts from 'highcharts/highstock';
import highchartsData from 'highcharts/modules/data';
import highchartsIndicatorsAll from 'highcharts/indicators/indicators-all';
import highchartsDragPanes from 'highcharts/modules/drag-panes';
import highchartsAnnotationsAdvanced from 'highcharts/modules/annotations-advanced';
import highchartsPriceIndicator from 'highcharts/modules/price-indicator';
import highchartsFullScreen from 'highcharts/modules/full-screen';
import highchartsStockTools from 'highcharts/modules/stock-tools';
import highchartsMap from 'highcharts/modules/map';

// highcharts模块初始化
highchartsData(Highcharts);
highchartsIndicatorsAll(Highcharts);
highchartsDragPanes(Highcharts);
highchartsAnnotationsAdvanced(Highcharts);
highchartsPriceIndicator(Highcharts);
highchartsFullScreen(Highcharts);
highchartsStockTools(Highcharts);
highchartsMap(Highcharts);

class QZStock {
    constructor() {
        // HighCharts实例方法
        this.Highcharts = Highcharts;
    }

    /**
     * 检查挂载节点是否存在
     * 存在，将节点返回出去
     * 不存在，抛出异常
     *
     * */
    getContainerNode = () => {
        if (!this.containerNode) {
            throw new Error('此时挂载节点还未渲染完成，loading方法无法执行，请注意生命周期确保图表渲染完成')
        }
        return this.containerNode
    }

    removeLoadingNode = () => {
        const containerNode = this.getContainerNode()
        // 查询是否有loading节点存在
        const loadingNode = containerNode.querySelector('.QZStock-loading')
        // 如果有loading节点存在，需要先清除节点
        if (loadingNode) {
            containerNode.removeChild(loadingNode)
        }
    }

    /**
     * 创建loading dom节点
     * @params {string} tip 当作为包裹元素时，可以自定义描述文案
     * @params {Node} svgIcon loading icon
     *
     * */
    createDefaultLoading = (tip, svgIcon) => {
        const containerNode = this.getContainerNode()
        // 先查找loading节点是否存在，并删除
        this.removeLoadingNode()
        containerNode.style.position = 'relative'
        const loadingNode = document.createElement('div')
        loadingNode.className = 'QZStock-loading'
        const loadingRender = `${svgIcon}<span class="text">${tip}</span>`
        loadingNode.innerHTML = loadingRender
        containerNode.appendChild(loadingNode)
    }

    /**
     * 显示loading
     *
     * */
    showLoading = (loadingOpt) => {
        // 合并loadingoption
        const {style, autoHide, delay, tip, svgIcon} = {...this.option.loadingApi, ...loadingOpt}
        this.createDefaultLoading(tip, svgIcon)
        const containerNode = this.getContainerNode()
        // 查询是否有loading节点存在
        const loadingNode = containerNode.getElementsByClassName('QZStock-loading')
        // 默认loading的基础样式
        const defaultLoadingStyle = style
        // 样式合并
        Object.assign(loadingNode[0].style, {...defaultLoadingStyle})
        // 是否延时消失
        if (autoHide) {
            setTimeout(this.hideLoading, delay)
        }
    }

    hideLoading = () => {
        this.removeLoadingNode()
    }
}

export default QZStock