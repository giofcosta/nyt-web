import Vuex from "vuex";
import Vue from "vue";
import archive from "./modules/archive";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    archive
  }
});