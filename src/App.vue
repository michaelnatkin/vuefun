<template>
  <div id="app">
    <v-app id="inspire">
      <v-tabs
        v-model="active"
        color="cyan"
        dark
        slider-color="yellow"
      >
        <v-tab
          :key="1"
          ripple
        >
          Main
        </v-tab>
        <v-tab-item
          :key="1"
        >
          <v-card id="controls" class="elevation-15">
            <v-card-text>
              <v-slider v-model="numBalls" step="1" label="N" min="1" max="50" ticks thumb-label hide-details></v-slider>
              <v-slider v-model="minRadius" label="minRadius" min="1" max="500" ticks thumb-label hide-details></v-slider>
              <v-slider v-model="maxRadius" label="maxRadius" min="1" max="500" ticks thumb-label hide-details></v-slider>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab
          :key="2"
          ripple
        >
          Color
        </v-tab>
        <v-tab-item
          :key="2"
        >
          <v-card id="controls" class="elevation-15">
            <v-card-text>
              <v-slider v-model="minHue" label="minHue" min="0" max="360"  hide-details thumb-label></v-slider>
              <v-slider v-model="maxHue" label="maxHue" min="0" max="360"  hide-details thumb-label></v-slider>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>

      <v-content id="balls">
        <ball v-for="n in numBalls" 
          :nn.number="n/numBalls" 
          :minHue.number="minHue" 
          :maxHue.number="maxHue"
        />
      </v-content>
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
      maxHue: 360,
      minRadius: 50,
      maxRadius: 300
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
  font-size: 50% !important;
}

#balls {
  position: absolute;
  width: 100vw;
  height: 100vw;
  bottom: 0px;
  transform: translateX(50vw) translateY(50vw);
}

#controls {
  z-index: 100;
}

.input-group {
  padding-top: 5px;
}

</style>
