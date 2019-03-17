<template lang="pug">
#Stage
  .listContainer
    .listInner
      .contentInner
        .titleContainer
          input#newListTitle.listTitle(ref="newTitleInput" type=text, v-bind:placeholder="newListTitle" @focus="newTitleInputFocused" @blur="newTitleInputBlurred" v-on:keydown.enter="newTitleEnterKey")
        .itemContainer
  Todolist(v-for="(item, index) in lists" :key="index" v-bind:listIndex="index")
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Todolist from "@/components/todolist.vue";

export default {
  name: "Stage",
  components: {
    Todolist
  },
  data: function() {
    return {
      newListTitle: "// new list //"
    };
  },
  computed: {
    lists: function() {
      return this.$store.state.lists;
    }
  },
  methods: {
    newTitleInputFocused: function() {
      this.newListTitle = "";
    },
    newTitleInputBlurred: function() {
      this.$store.dispatch("addNewList", this.$refs.newTitleInput.value);
      this.$refs.newTitleInput.value = "";
      this.newListTitle = "// new list //";
    },
    newTitleEnterKey: function() {
      this.$refs.newTitleInput.blur();
      this.$refs.newTitleInput.value = "";
    }
  }
};
</script>

<style scoped lang="scss">
#Stage {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  background-color: #6b6b6b;

  padding: 3%;
  padding-top: 3em;

  @media only screen and (min-width: 200px){
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;
  }
  @media only screen and (min-width: 700px){
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
