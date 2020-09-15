import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// start bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// start my style
import "./scss/style.scss";

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
