/**
 * containerID: 挂载节点的id
 *
 * lang: 语言环境, 默认简体中文
 *       简体中文：zh-CN
 *       英文: en-US
 *
 * loading: 加载节点的API
 *      svgIcon: 默认svg动画,
 *      tip: 当作为包裹元素时，可以自定义描述文案
 *      delay: 延迟显示加载效果的时间（防止闪烁）
 *      autoHide: 延时结束后是否自动loading消失
 *      style: loading外层的样式设置
 *
 *
 * chartConfigOption: highChart默认主要配置
 *
 * */

// 默认loading外层节点样式
const defaultLoadingStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    color: '#FFEBC8',
    fontSize: '12px',
    background: '#121A19'
}

// 默认svg loading 动画
const defaultLoadingSvg =
    '<svg class="QZStock-loading-default-svg" viewBox="25 25 50 50">\n' +
    '  <circle class="QZStock-loading-default-circle" cx="50" cy="50" r="20"></circle>\n' +
    '</svg>'

module.exports = {
    containerID: '',
    lang: 'zh-CN',
    loadingApi: {
        svgIcon: defaultLoadingSvg,
        tip: 'loading',
        delay: 3000,
        autoHide: true,
        style: defaultLoadingStyle
    },
    defaultChartConfigOption: {
        chart: {
            backgroundColor: '#121A19'
        },
    }
}