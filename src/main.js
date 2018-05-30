import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Default from "./layouts/Default.vue";
import NoSidebar from "./layouts/NoSidebar.vue";

Vue.component("default-layout", Default);
Vue.component("no-sidebar-layout", NoSidebar);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
