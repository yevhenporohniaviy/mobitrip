import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import 'font-awesome/scss/font-awesome.scss';

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import './styles/main.scss'


new Vue({
  render: h => h(App),
}).$mount('#app')