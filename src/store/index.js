// 引入Vue和Vuex
import Vue from 'vue';
import Vuex from 'Vuex';

// 在Vue中使用Vuex
Vue.use(Vuex);

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// 定义state
const state = {
    count : 100,
    todos : [
        {text : '学习vue.js', done:true},
        {text : '研究react.js', done:false},
        {text : '找工作', done:true}
    ]
}

// 定义getters (计算属性，往往根据业务逻辑调整)
// const getters = {}

// 定义mutations
// const mutations = {}

// 定义actions
// const actions = {}

// 实例化一个 store 对象并导出
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
