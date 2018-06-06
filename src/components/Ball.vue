<template>
  <transition
    v-on:enter="enter"
    appear
  >

    <div class="ball-outer" v-bind:style="outerStyleObject">
      <template v-if="shape==0">
        <svg  :height="radius*2" :width="radius*2">
          <circle  :cx="radius" :cy="radius" :r="radius" :fill="getColor()" opacity="0.2"/>
        </svg>
      </template>
      <template v-if="shape==1">
        <svg :height="radius*2" :width="radius*2">
          <rect :cx="radius" :cy="radius" :width="radius*2" :height="radius*2" :fill="getColor()" opacity="0.2"/>
        </svg>
      </template>
    </div>
  </transition>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'Ball',
  props: {
    shape: Number,
    nn: Number,
    speed: Number,
    minHue: Number,
    maxHue: Number,
    minRadius: Number,
    maxRadius: Number
  },
  data: function () { 
    return {
      x: 50,
      y: 50,
      dx: Math.random() * 100,
      dy: Math.random() * 100,
   }
  },
  watch: {
    speed: function(newSpeed) {
      anime.speed = newSpeed / 100.0;
    }
  },
  computed: {
    hue: function() {
      return this.minHue + Math.floor(this.nn * (this.maxHue - this.minHue));
    },
    radius: function () {
      return this.maxRadius - (this.nn * (this.maxRadius - this.minRadius));
    },
    outerStyleObject: function () {
      return {
        transform: "translateX(" + -this.radius + "px) translateY(" + -this.radius + "px)"
      }
    },
    rotDurationX: function() {
      return 2000 + Math.random() * (50000.0 / this.speed);
    },
    rotDurationY: function() {
      return 2000 + Math.random() * (50000.0 / this.speed); 
    }

  },
  methods: {
    getColor: function () {
      let x = "hsl(" + this.hue +", 70%, 50%)";
      return x;
    },
    startAnimation: function (el) {
      anime({
        targets: el.children,
        rotateX: {
          value: 360,
          duration: this.rotDurationX
        },
        rotateY: {
          value: 360,
          duration: this.rotDurationY
        },
        loop: true,
        easing: 'linear',
        delay: 0
      });
    },
    enter: function (el) {
      this.startAnimation(el);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ball-outer  {
  position: absolute;
}

</style>
