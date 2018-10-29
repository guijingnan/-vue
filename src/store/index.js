import Vue from 'vue'
import VueX from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(VueX);
export default new VueX.Store({
  state,
  mutations,
  actions,
  getters
})
