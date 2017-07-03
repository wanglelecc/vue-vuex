<template lang="html">
  <div class="">
      <h2>计数器</h2>
      <p>{{count}}</p>
      <p>{{total}}</p>
      <p>{{complted}}</p>
      <p>
          <button type="button" @click="add">+</button>
          <button type="button" @click="sub">-</button>
          <button type="button" @click="addAsync">+Async</button>
      </p>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations, mapActions} from 'vuex'
export default {
    name: 'raiing',
    // data (){
    //     return {
    //         count : 0,
    //         name : '',
    //     }
    // },

    computed : {
        ...mapState(['count']),
        ...mapGetters(['total','complted'])
    },

    methods : {
        // add(){
        //     // this.count++;
        //     this.$store.commit('add');
        // },
        // sub(){
        //     // this.count--;
        //     this.$store.commit('sub');
        // }
        ...mapMutations([
            'add',
            'sub'
        ]),
        ...mapActions({
            addAsync : "incrementAsync"
        })
    }

}
</script>

<style lang="css">
</style>
