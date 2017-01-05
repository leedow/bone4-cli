/**
 * 命名规范：
 *     {{模块名}}/{{方法名}}
 * 方法名命名规范：
 *     {{动作名}}_{{动作对象}}_{{动作修饰}}
 * 方法命名举例：
 *     INIT_DATA,GET_DATA_BY_ID,UPDATE_DATA_BY_ID
 * 动作名规范：
 *     INIT:初始化数据
 *     GET:获取数据
 *     UPDATE:更新数据
 *     DELETE:删除数据
 *     CLEAN:清空所有数据
 */
import bo from '../helper/bo'

const MODULE_NAME = 'demo'
const INIT_DATA = `${MODULE_NAME}/initData`
const INIT_SELECTDATA = `${MODULE_NAME}/initCategories`
const GET_OPTIONS = `${MODULE_NAME}/getOptions`

export default {
  state: {
    data: [],
    selectData: [{
      id: 1,
      name: 'test'
    }, {
      id: 2,
      name: 'test2'
    }]
  },
  mutations: {
    [INIT_DATA](state, data) {
      state.data = data // eslint-disable-line
    },
    [INIT_SELECTDATA](state, data) {
      state.selectData = data // eslint-disable-line
    }
  },
  actions: {

  },
  getters: {
    [GET_OPTIONS]: state => bo.getOptions(state.selectData, 'id', 'name')
  }
}
