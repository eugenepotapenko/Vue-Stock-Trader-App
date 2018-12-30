import Vue from 'vue';
import App from './App.vue';
var Client = require('node-rest-client').Client;
var client = new Client();
import router from './router';
import store from './store/store';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import '../node_modules/vue-material/dist/theme/prebuilt/default.scss';
import './assets/css/icons.css';
import './assets/css/materialize.min.css'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter);
Vue.use(VueResource);


{
  // GET /someUrl

  client.get("https://vuejs-stock-trader-c806f.firebaseio.com/", function (data, response) {
    // parsed response body as js object
    console.log(data);
    // raw response
    console.log(response);
    // });  Vue.http.get('vuejs-stock-trader-c806f.firebaseio.com').then(res, err,data => {
    //     let data = request.body;
    //     res => {
    //         console.log(res);
    //       },
    //       err => {
    //         console.log("Error occured");
    //       }
  });
}



Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});


new Vue({
  el: '#app',
  mode: 'history',
  router,
  store,
  render: h => h(App)
}).$mount('#app')