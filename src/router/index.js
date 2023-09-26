import Vue from "vue";
import VueRouter from "vue-router";
import ShoppingCart from "../components/ShoppingCart";
import StoreComponent from "../components/StoreComponent";

Vue.use(VueRouter);
export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: StoreComponent },
    { path: "/cart", component: ShoppingCart },
    { path: "*", redirect: "/" },
  ],
});
