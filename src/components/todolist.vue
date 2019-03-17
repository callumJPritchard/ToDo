<template lang="pug">
  .listContainer
    .listInner
      .toolBar
          h2(v-on:click="deleteList") x
      .contentInner
        .titleContainer
          input#ListTitle.listTitle(ref="newTitleInput" type=text, v-bind:placeholder="title" @focus="titleFocus" @blur="titleBlur" v-on:keydown.enter="titleBlur")
        .itemContainer
          input#newListItem(ref="newListItem" type=text v-bind:placeholder="newItemPlaceholder" @focus="newItemFocus" @blur="newItemBlur" v-on:keydown.enter="newItemEnter")
          listItem(v-for="(item, index) in items" :key="index + item.Text" v-bind:listIndex="listIndex" v-bind:itemIndex="index")
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import listItem from "@/components/listItem.vue";

export default {
  name: "Todolist",
  components: {
    listItem
  },
  props: {
    listIndex: Number
  },
  data: function() {
    return {
      newItemPlaceholder: "// new item //"
    };
  },
  computed: {
    title: function() {
      return this.$store.state.lists[this.listIndex].Title;
    },
    items: function() {
      return this.$store.state.lists[this.listIndex].Items;
    }
  },
  methods: {
    deleteList: function() {
      this.$store.dispatch("deleteList", this.listIndex);
    },
    titleFocus: function() {
      this.$refs.newTitleInput.value = "";
    },
    titleBlur: function() {
      this.$store.dispatch("changeTitle", {
        title: this.$refs.newTitleInput.value,
        listID: this.listIndex
      });
      this.$refs.newTitleInput.value = "";
    },
    newItemFocus: function() {
      this.newItemPlaceholder = "";
    },
    newItemBlur: function() {
      this.newItemPlaceholder = "// new item //";
      this.$refs.newListItem.value = "";
    },
    newItemEnter: function() {
      this.$store.dispatch("newToDoItem", {
        listID: this.listIndex,
        item: this.$refs.newListItem.value
      });
      this.$refs.newListItem.value = "";
      this.$refs.newListItem.focus();
    }
  }
};
</script>

<style lang="scss">
.listContainer {
  @media only screen and (min-width: 200px){
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;
  }
  @media only screen and (min-width: 700px){
    width: 45%;
  }
  @media only screen and (min-width: 1000px){
    width: 30%;
  }
  height: 0%;
  padding: 0.5em;
}
.toolBar {
  margin: 0;
  background-color: white;
  border-radius: 0.5em 0.5em 0 0;
  text-align: right;
  overflow: hidden;
  h2 {
    padding: 0;
    padding-right: 0.3em;
    padding-left: 0.3em;
    margin: 0;
    width: auto;
    display: inline-block;
    &:hover {
      background-color: red;
      cursor: pointer;
    }
  }
}
.listInner {
  background-color: white;
  border-radius: 0.5em 0.5em 0.5em 0.5em;
}
.contentInner {
  padding: 0.5em;
  background-color: #4c4c4c;
  border-radius: 0.5em;
  border: solid white 0.1em;
}
.listTitle {
  text-align: center;
  width: 100%;
  border: none;
  background-color: inherit;
  border-bottom: solid #6b6b6b 0.3em;
  color: white;
  font-size: 1.5em;
}
#newListItem {
  text-align: center;
  width: 100%;
  border: none;
  background-color: inherit;
  color: white;
}
#newListItem::placeholder {
  color: white;
}
.listTitle::placeholder {
  color: white;
  font-size: 1em;
}
</style>
