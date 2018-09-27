// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App'
import firebase from 'firebase'
import router from './router'
import config from '../config/firebase.env.js'
import VueAnalytics from 'vue-analytics'

Vue.use(Buefy)
Vue.use(VueAnalytics, {
  id: 'UA-126543824-1',
  router
})

firebase.initializeApp(config)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
