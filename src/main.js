import Vue from "vue";
import App from "./App.vue";
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
