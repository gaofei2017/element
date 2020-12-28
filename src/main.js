import Vue from 'vue'
import App from './App.vue'
import router from './router'
import aesUtils from './utils/secret'
import store from './store'
import axios from 'axios'
import md5 from 'js-md5'
import ElementUI from 'element-ui';
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css';
// import './assets/element-variables.scss'
Vue.prototype.$echarts = echarts
Vue.prototype.$aesUtils = aesUtils
Vue.prototype.$axios = axios
Vue.prototype.$md5 = md5
Vue.config.productionTip = false
Vue.use(ElementUI);
// const a = Vue.prototype.$aesUtils.Encrypt('11')
// console.log(Vue.prototype.$aesUtils.Decrypt(a))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
