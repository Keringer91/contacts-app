import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import SingleContact from './components/SingleContact.vue'
import AddContact from './components/AddContact.vue'
import Contacts from './components/Contacts.vue'


Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { name: "index", path: "/", redirect: "/contacts" },
  { name: "contacts", path: "/contacts", component: Contacts },
  { name: "contact", path: "/contact/:id", component: SingleContact},
  { name: "add", path: "/add", component: AddContact },
  { name: "edit", path: "/edit/:id", component: AddContact },
]

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");