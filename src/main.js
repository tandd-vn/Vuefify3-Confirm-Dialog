import { createApp } from 'vue'
import App from './App.vue'

import vuetify from "@/plugins/Vuetify";

import Vuetify3ConfirmDialog from 'vuetify3-confirm-dialog'

createApp(App).use(vuetify).use(Vuetify3ConfirmDialog).mount('#app')
