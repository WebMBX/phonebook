<template>
  <div class="home">
    <div class="container">
      <img alt="Vue logo" src="../assets/logo.png" />
      <Search />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";

export default {
  name: "Home",
  components: {
    Search,
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
