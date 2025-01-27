import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia()

new Vue({
    router,
    pinia,
    render: h => h(App)
}).$mount('#app');