<template>
  <div id="app">
    <v-app id="inspire">
      <v-card id="controls">
        <v-card-text>
          <v-slider v-model="numBalls" step="1" label="N" min="1" max="50" ticks thumb-label></v-slider>
          <v-slider v-model="minHue" step="1" label="minHue" min="0" max="360" ticks thumb-label></v-slider>
          <v-slider v-model="maxHue" step="1" label="maxHue" min="0" max="360" ticks thumb-label></v-slider>
        </v-card-text>
      </v-card>
      <div id="balls">
        <ball v-for="n in numBalls" :nn.number="n/numBalls" :minHue.number="minHue" :maxHue.number="maxHue"/>
      </div>
    </v-app>
  </div>
</template>

<script>

import Ball from './components/Ball.vue'
import velocity from 'velocity-animate'
import RangeSlider from 'vue-range-slider'
// you probably need to import built-in style
import "vue-range-slider/dist/vue-range-slider.css"

export default {
  name: 'app',
  components: {
    Ball,
    RangeSlider
  }, 
  methods: {
  },
  data () {
    return {
      numBalls: 10,
      minHue: 0,
      maxHue: 360
    }
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
}

#balls {
  position: absolute;
  transform: translateX(50vw) translateY(50vh);
}

#controls {
  z-index: 100;
}

</style>
