<template>
  <transition
    v-on:enter="enter"
    appear
  >
  <div class="ball-outer" v-bind:style="outerStyleObject">
      <svg :height="radius*2" :width="radius*2">
        <circle  :cx="radius" :cy="radius" :r="radius" :fill="getColor()" opacity="0.2"/>
      </svg>
  </div>
  </transition>

</template>

<script>
import anime from 'animejs'

export default {
  name: 'Ball',
  props: {
    nn: Number,
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
      duration: 500 + Math.random() * 5000,
      rotDurationX: 2000 + Math.random() * 10000,
      rotDurationY: 2000 + Math.random() * 10000,
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
    }
  },
  methods: {
    getColor: function () {
      let x = "hsl(" + this.hue +", 70%, 50%)";
      return x;
    },
    enter: function (el) {
      anime({
        targets: el.children[0],
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
