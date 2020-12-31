import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import router from './krouter'

Vue.config.productionTip = false

// 挂载router实例，why？
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
