/**
* @name: 检测封装类型方法
* @description:
* @author: taochenyong@qianxin.com
* time: 2021-07-29 14:55:27
* */
function typeOf(obj) {
    let res = Object.prototype.toString.call(obj).split(' ')[1]
    res = res.substring(0, res.length - 1).toLowerCase()
    return res
}
export {
    typeOf
}