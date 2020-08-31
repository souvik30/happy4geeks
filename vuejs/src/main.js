import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/icon.css";
import "element-ui/lib/theme-chalk/notification.css";
import "element-ui/lib/theme-chalk/loading.css";
import axios from "@/plugin/axios";
import VueAxios from "vue-axios";
import router from "./router";
import vSelect from 'vue-select';
import EventBus from "./EventBus";
import i18n from "./i18n";
import VuePlyr from "vue-plyr"
import store from "@/store/index";
import VueClipboard from "vue-clipboard2";
import VueLazyload from "vue-lazyload";
import VTooltip from 'v-tooltip'
import Viewer from "v-viewer";
import { createPlayer, globalPlayer, destroyPlayer } from "./plugin/aplayer";
import cdnpath from "./libs/util.cdn";
import '@/components'
import Meta from 'vue-meta'
import "viewerjs/dist/viewer.css";
import "@/assets/style/theme/register.scss";

Vue.config.productionTip = false;
Vue.prototype.$cdnpath = cdnpath;
Vue.prototype.$bus = EventBus;
Vue.prototype.$audio = {
  createPlayer: createPlayer,
  player: globalPlayer,
  destroy: destroyPlayer,
}
Vue.use(ElementUI);
Vue.use(VTooltip);
Vue.use(VueAxios, axios);
Vue.use(Meta)
Vue.component('v-select', vSelect)
Vue.use(require('vue-moment'));
Vue.use(VueClipboard);
Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: true },
    keyboard: { focused: true, global: true },
  },
});
Vue.use(VueLazyload, {
  loading: cdnpath("images/airplane.gif"),
});
Vue.use(Viewer);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
  mounted() {
    this.$store.dispatch("acrou/view/load");
  },
}).$mount("#app");
