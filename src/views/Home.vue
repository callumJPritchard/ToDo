<template lang="pug">
#home
  headerBar
  Stage
</template>

<script>
// @ is an alias to /src
import headerBar from "@/components/headerBar.vue";
import Stage from "@/components/Stage.vue";

export default {
  name: "home",
  components: {
    headerBar,
    Stage
  }
};
</script>

<style lang="scss">
#home {
  background-color: #6b6b6b;
  height: 100%;
}
</style>
