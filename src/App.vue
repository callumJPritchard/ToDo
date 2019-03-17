<template lang="pug">
#app
  router-view
</template>

<style lang="scss">
html,
body,
#app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: auto;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
::-webkit-scrollbar {
  width: 0px; /* remove scrollbar space */
  background: transparent; /* optional: just make scrollbar invisible */
}
/* optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: #ff0000;
}
</style>
