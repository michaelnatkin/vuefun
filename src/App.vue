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
              <v-slider v-model="ballData.minRadius" label="xminRadius" min="1" max="500" ticks thumb-label hide-details></v-slider>
              <v-slider v-model="ballData.maxRadius" label="xmaxRadius" min="1" max="500" ticks thumb-label hide-details></v-slider>
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
              <v-slider v-model="ballData.minHue" label="minHue" min="1" max="360"  hide-details thumb-label></v-slider>
              <v-slider v-model="ballData.maxHue" label="maxHue" min="1" max="360"  hide-details thumb-label></v-slider>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>

      <v-content id="balls">
        <ball v-for="n in numBalls" 
          :nn="n/numBalls" 
          :key="n"
          v-bind="ballData" 
        />
      </v-content>
    </v-app>
  </div>
</template>

<script>

import Ball from './components/Ball.vue'

export default {
  name: 'app',
  components: {
    Ball
  }, 
  methods: {
  },
  data () {
    return {
      numBalls: 10,

      ballData: {
        minRadius: 50,
        maxRadius: 300,  
        minHue: 0,
        maxHue: 360
      }
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
  transform: translateX(50vw) translateY(50vh);
}

#controls {
  z-index: 100;
}

.input-group {
  padding-top: 5px;
}

</style>
