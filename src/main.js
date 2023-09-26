import "@/bootstrap.js";
import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"
import store from "./store";
import router from "./router";
import Vuelidate from "vuelidate";


Vue.filter("currency", (value) => new Intl.NumberFormat("en-US",
    { style: "currency", currency: "GBP" }).format(value));

Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
    store,
    router
}).$mount('#app')

 console.log("Hello");
console.log("Apples");
console.log("This is a statement");
 console.log("This is also a statement");