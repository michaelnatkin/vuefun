<template>
  <div id="app">
    <ball v-for="n in 20" :nn.number="n/20"/>
  </div>
</template>

<script>

import Ball from './components/Ball.vue'
import velocity from 'velocity-animate'

export default {
  name: 'app',
  components: {
    Ball
  }, 
  methods: {
  }
}
</script>

<style> 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  position: absolute;
  transform: translateX(50vw) translateY(50vh);
}

</style>
