import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;
Vue.use(Vuetify);
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  vuetify: new Vuetify({}),
  render: (h) => h(App)
}).$mount("#app");
