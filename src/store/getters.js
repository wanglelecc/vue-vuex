export default {
    total(state){
        return state.todos.length;
    },
    complted(state){
        return state.todos.filter(todo=>todo.done).length;
    }
}
