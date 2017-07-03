<template>
  <div id="app">
    <Raiing></Raiing>
  </div>
</template>

<script>

import Raiing from './components/Raiing'

export default {
  name: 'app',
  components: {
    Raiing
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
