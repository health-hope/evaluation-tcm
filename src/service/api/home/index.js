import request from '../../request'
/**
 * 加载中医测封面内容。
 * @param {String} code 测评编码
 */
export const apiHomeData = (code) => request('/ego-gw/v3/tcm/evaluation/brief/index.do',{ code })
/**
 * 查询最新测评结果
 * @param {String} code 测评编码
 * @param {String} userId 用户id
 */
export const apiLatestData = (code, userId) => request('/ego-gw/v3/tcm/evaluation/latest/result.do',{ code, userId })
