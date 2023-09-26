import Vue from "vue";
import VueRouter from "vue-router";
import ShoppingCart from "../components/ShoppingCart";
import StoreComponent from "../components/StoreComponent";
import CheckOut from "../components/CheckOut";
import OrderThanks from "../components/OrderThanks";

Vue.use(VueRouter);
export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: StoreComponent },
    { path: "/cart", component: ShoppingCart },
    { path: "/checkout", component: CheckOut}, 
    { path: "/thanks/:id", component: OrderThanks},
    { path: "*", redirect: "/" },
  ],
});
