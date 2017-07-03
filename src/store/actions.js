export default {
    incrementAsync(content){
        setTimeout(()=>{
            content.commit('add');
        },1000)
    }
}
