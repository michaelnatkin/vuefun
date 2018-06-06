<template>
  <div id="app">
    <v-app id="inspire">
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12>
            <v-menu min-width="300px" offset-y="true">
              <v-btn slot="activator" fab><v-icon>settings</v-icon></v-btn>
              <v-list>
                <v-list-tile>
                  <v-radio-group v-model="ballData.shape">
                    <v-radio :key="0" :label="`Circles`" :value="0"/>
                    <v-radio :key="1" :label="`Rectangles`" :value="1"/>   
                  </v-radio-group>
                </v-list-tile>
                <v-list-tile>
                  <v-slider v-model="numBalls" step="1" min="1" max="50" hint="N" persistent-hint ticks thumb-label/>
                </v-list-tile>
                <v-list-tile>
                  <v-slider v-model="ballData.speed" min="10" max="500" ticks hint="Speed" persistent-hint thumb-label/>
                </v-list-tile>
                <v-list-tile>
                  <v-slider v-model="ballData.minRadius" hint="Min Size" persistent-hint min="1" max="500" ticks thumb-label></v-slider>
                </v-list-tile>
                <v-list-tile>
                  <v-slider v-model="ballData.maxRadius" hint="Max Size" persistent-hint min="1" max="500" ticks thumb-label></v-slider>
                </v-list-tile>
              </v-list>
            </v-menu>

            <v-menu min-width="300px" offset-y="true">
              <v-btn slot="activator" fab><v-icon>tonality</v-icon></v-btn>
              <v-list>
                <v-list-tile>
                  <v-slider v-model="ballData.minHue" hint="Min Hue" persistent-hint min="1" max="360" thumb-label></v-slider>
                </v-list-tile>

                <v-list-tile>
                  <v-slider v-model="ballData.maxHue" hint="Max Hue" persistent-hint min="1" max="360" thumb-label></v-slider>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-flex>
        </v-layout>
      </v-container>


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
        shape: 0,
        speed: 100,
        minRadius: 50,
        maxRadius: 300,  
        minHue: 0,
        maxHue: 360,
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

.menu {
  z-index: 100;
}

#bar {
  left: 15px;
  top: 30px;
}

#balls {
  position: absolute;
  width: 100vw;
  height: 100vh;
  transform: translateX(50vw) translateY(50vh);
}

#controls {
  z-index: 100;
}

.input-group {
  padding-top: 5px;
}

</style>
