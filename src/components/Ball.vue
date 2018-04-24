<template>
  <transition
    v-on:enter="enter"
    v-on:before-enter="beforeEnter"
    appear
  >
  <div class="ball-outer" v-bind:style="outerStyleObject">
      <svg :height="radius*2" :width="radius*2">
        <circle  :cx="radius" :cy="radius" :r="radius" :fill="getColor()" opacity="0.5"/>
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
    maxHue: Number
  },
  data: function () {
    let radius = 10 + Math.random() * 300;
    let osl = {
      transform: "translateX(" + -radius + "px) translateY(" + -radius + "px)"
    }
    console.log(osl);
    return {
      x: 50,
      y: 50,
      dx: Math.random() * 100,
      dy: Math.random() * 100,
      radius: radius,
      duration: 500 + Math.random() * 5000,
      rotDurationX: 2000 + Math.random() * 10000,
      rotDurationY: 2000 + Math.random() * 10000,
      outerStyleObject: osl
    }
  },
  computed: {
    hue: function() {
      return this.minHue + Math.floor(this.nn * (this.maxHue - this.minHue));
    }
  },
  methods: {
    getColor: function () {
      let x = "hsl(" + this.hue +", 70%, 50%)";
      console.log("hi", x);
      return x;

    },
    beforeEnter: function (el) {
    },
    enter: function (el, done) {
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
