<template>
  <div id="app">
    <v-app id="inspire">
      <v-toolbar id="bar" app='true' flat='true' floating='true'>
        <v-menu offset-y min-width="400px">
          <v-toolbar-title slot="activator">
            <span>Main</span>
            <v-icon>arrow_drop_down</v-icon>
          </v-toolbar-title>
          <v-list>
            <v-list-tile>
              <v-slider v-model="numBalls" step="1" label="N" min="1" max="50" ticks thumb-label hide-details></v-slider>
            </v-list-tile>
            <v-list-tile>
              <v-slider v-model="ballData.minRadius" label="xminRadius" min="1" max="500" ticks thumb-label hide-details></v-slider>
            </v-list-tile>
            <v-list-tile>
              <v-slider v-model="ballData.maxRadius" label="xmaxRadius" min="1" max="500" ticks thumb-label hide-details></v-slider>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-menu offset-y min-width="400px">
          <v-btn slot="activator" flat>Color</v-btn>
          <v-slider v-model="ballData.minHue" label="minHue" min="1" max="360"  hide-details thumb-label></v-slider>
          <v-slider v-model="ballData.maxHue" label="maxHue" min="1" max="360"  hide-details thumb-label></v-slider>
        </v-menu>
      </v-toolbar>

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

#bar {
  left: 15px;
  top: 30px;
}

#balls {
  position: absolute;
  width: 100vw;
  height: 100vw;
  top: 100px;
  transform: translateX(50vw) translateY(50vh);
}

#controls {
  z-index: 100;
}

.input-group {
  padding-top: 5px;
}

</style>
