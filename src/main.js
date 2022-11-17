import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/js/script.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSpinner)
    // Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.use(BootstrapVue)

import './assets/main.css'
import './assets/css/main.css'

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')