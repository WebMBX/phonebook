<template>
  <div id="app">
    <div class="container">
      <img alt="Vue logo" src="./assets/logo.png" />
      <Control />
    </div>
  </div>
</template>

<script>
import Control from "./components/Control.vue";

export default {
  name: "App",
  components: {
    Control,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #eee;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
