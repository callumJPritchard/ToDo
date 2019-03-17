<template lang="pug">
#headerBar
  h1#title /* ToDo
  h1#accountButton  */
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "headerBar",
  computed: {
    AccountName: function() {
      return ">" + this.$store.state.accountInfo.name;
    }
  }
};
</script>

<style scoped lang="scss">
#headerBar {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #4c4c4c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid white 0.1em;
  * {
    width: auto;
    margin: 0;
    padding: 0;
    padding-left: 0.4em;
    padding-right: 0.4em;
  }
}
</style>
