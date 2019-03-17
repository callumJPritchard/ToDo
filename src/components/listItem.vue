<template lang="pug">
#itemOuter
  .svgsurround
    svg.checkBox(viewBox="0 0 100 100")
      g
        circle(
          v-if="completed == false"
          class="svgHover"
          cx="50"
          cy="50"
          r="30"
          stroke="red"
          fill="#4c4c4c"
          stroke-width="12"
          v-on:click="completeThis"
          )
        circle(
          v-if="completed == true"
          class="svgHover"
          cx="50"
          cy="50"
          r="30"
          stroke="#7aff7e"
          fill="#7aff7e"
          stroke-width="12"
          v-on:click="inCompleteThis"
          )
  input.itemInput(ref="thisItemText" type="text" v-bind:style="decoration" v-bind:placeholder="itemName" @focus="textFocus" @blur="textBlur" v-on:keydown.enter="textBlurEnter")
  p.deleteButton(v-if="completed" v-on:click="deleteItem") delete
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "listItem",
  props: {
    listIndex: Number,
    itemIndex: Number
  },
  mounted() {
    this.$refs.thisItemText.value = this.itemName;
  },
  computed: {
    itemName: function() {
      return (
        " " +
        this.$store.state.lists[this.listIndex].Items[this.itemIndex].Text +
        " "
      );
    },
    completed: function() {
      return this.$store.state.lists[this.listIndex].Items[this.itemIndex]
        .Completed;
    },
    decoration: function() {
      if (this.completed) {
        return "text-decoration: line-through";
      } else {
        return "";
      }
    }
  },
  methods: {
    deleteItem: function() {
      this.$store.dispatch("deleteItem", {
        listID: this.listIndex,
        itemID: this.itemIndex
      });
      console.log(this.itemIndex);
    },
    textFocus: function() {
      this.$refs.thisItemText.value = this.itemName;
    },
    textBlurEnter: function() {
      this.textBlur();
      this.$refs.thisItemText.blur();
    },
    textBlur: function() {
      this.$store.dispatch("changeItemText", {
        listID: this.listIndex,
        itemID: this.itemIndex,
        text: this.$refs.thisItemText.value
      });
      this.$refs.thisItemText.value = this.itemName;
    },
    completeThis: function() {
      this.$store.dispatch("completeThis", {
        listID: this.listIndex,
        itemID: this.itemIndex
      });
    },
    inCompleteThis: function() {
      this.$store.dispatch("inCompleteThis", {
        listID: this.listIndex,
        itemID: this.itemIndex
      });
    }
  }
};
</script>

<style lang="scss">
.deleteButton {
  padding: 0;
  padding-left: 0.3em;
  margin: 0;
  color: white;
  align-self: center;
  &:hover {
    cursor: pointer;
    color: red;
  }
}
#itemOuter {
  width: 100%;
  display: flex;
  border-top: solid #6b6b6b 0.1em;
}
.itemInput {
  width: 100%;
  border: none;
  background-color: inherit;
  color: white;
  padding-left: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
.itemInput::placeholder {
  color: white;
}
.svgsurround {
  position: relative;
  min-width: 2em;
}
.checkBox {
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
.svgHover {
  cursor: pointer;
}
</style>
