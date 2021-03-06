/**
 * 全局常量、方法封装模块
 * 通过原型挂载到Vue属性
 * 通过 this.Global 调用
 */

 // 后台管理系统服务器地址
// export const baseUrl = 'http://139.196.87.48:8001'
export const baseUrl = 'http://localhost:9005'
//export const baseUrl = ''
//export const baseUrl = 'http://192.168.1.211:9005'
 // 系统数据备份还原服务器地址
// export const backupBaseUrl = 'http://139.196.87.48:8002'
export const backupBaseUrl = 'http://localhost:9006'

export default {
    baseUrl,
    backupBaseUrl
}