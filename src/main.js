import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import routes from './plugins/router'; /**importo el router */

Vue.use(VueRouter);
const router = new VueRouter ({routes}); /**creo el objeto router */

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
