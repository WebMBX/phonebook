import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    data: [],
    tableData: [],
  },

  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setTableData(state, data) {
      state.tableData = data;
    },
  },

  //   actions: {

  //   }
});

export default store;
