import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accountInfo: {
      name: "ACCOUNT"
    },
    lists: [],
    emptyList: {
      Title: "",
      Items: []
    }
  },
  mutations: {
    initialiseStore(state) {
      // Check if the ID exists
      if (localStorage.getItem("store")) {
        // Replace the state object with the stored item
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    },
    addNewList(state, title) {
      state.lists.push({
        Title: title,
        Items: []
      });
    },
    newToDoItem(state, obj) {
      state.lists[obj.listID].Items.push({
        Text: obj.item,
        Completed: false
      });
    },
    completeThis(state, obj) {
      state.lists[obj.listID].Items[obj.itemID].Completed = true;
    },
    inCompleteThis(state, obj) {
      state.lists[obj.listID].Items[obj.itemID].Completed = false;
    },
    changeTitle(state, obj) {
      state.lists[obj.listID].Title = obj.title;
    },
    changeItemText(state, obj) {
      state.lists[obj.listID].Items[obj.itemID].Text = obj.text;
    },
    deleteList(state, id) {
      state.lists.splice(id, 1);
    },
    deleteItem(state, obj) {
      state.lists[obj.listID].Items.splice(obj.itemID, 1);
    }
  },
  actions: {
    addNewList(context, title) {
      if (title.replace(/\s/g, "").length > 0) {
        context.commit("addNewList", title.trim());
      }
    },
    newToDoItem(context, obj) {
      if (obj.item.replace(/\s/g, "").length > 0) {
        obj.item = obj.item.trim();
        context.commit("newToDoItem", obj);
      }
    },
    completeThis(context, obj) {
      context.commit("completeThis", obj);
    },
    inCompleteThis(context, obj) {
      context.commit("inCompleteThis", obj);
    },
    changeTitle(context, obj) {
      if (obj.title.replace(/\s/g, "").length > 0) {
        obj.title = obj.title.trim();
        context.commit("changeTitle", obj);
      }
    },
    changeItemText(context, obj) {
      if (obj.text.replace(/\s/g, "").length > 0) {
        obj.text = obj.text.trim();
        context.commit("changeItemText", obj);
      }
    },
    deleteList(context, id) {
      context.commit("deleteList", id);
    },
    deleteItem(context, obj) {
      context.commit("deleteItem", obj);
    }
  }
});
