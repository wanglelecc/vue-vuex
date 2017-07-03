// 引入Vue和Vuex
import Vue from 'vue';
import Vuex from 'Vuex';

// 在Vue中使用Vuex
Vue.use(Vuex);

// 定义state
const state = {
    count : 100,
    todos : [
        {text : '学习vue.js', done:true},
        {text : '研究react.js', done:false},
        {text : '找工作', done:false}
    ]
}

// 定义getters (计算属性，往往根据业务逻辑调整)
const getters = {
    total(state){
        return state.todos.length;
    },
    complted(){
        return state.todos.filter(todo=>todo.done).length;
    }
}

// 定义mutations
const mutations = {
    add (state){
        state.count++;
    },
    sub (state){
        state.count--;
    }
}

// 定义actions
const actions = {
    incrementAsync(content){
        setTimeout(()=>{
            content.commit('add');
        },1000)
    }
}

// 实例化一个 store 对象并导出
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
