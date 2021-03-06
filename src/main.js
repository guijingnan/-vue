// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './mock/mockServer'
import App from './App.vue'
import router from './router'
import api from './http/index'
import store from './store'
Vue.config.productionTip = false;
Vue.use(api)
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h => h(App),
  store
})
