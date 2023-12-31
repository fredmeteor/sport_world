import Vue from "vue";
import VueRouter  from "vue-router";
import StoreComponent from "../components/StoreComponent";
import ShoppingCart from "../components/ShoppingCart";
import CheckOut from "../components/CheckOut";
import OrderThanks from "../components/OrderThanks";
import Authentication from "../components/admin/Authentication";
import Admin from "../components/admin/Admin";
import ProductAdmin from "../components/admin/ProductAdmin";
import OrderAdmin from "../components/admin/OrderAdmin";
import ProductEditor from "../components/admin/ProductEditor";
import CategoryAdmin from "../components/admin/CategoryAdmin";
//import dataStore from "../store";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: StoreComponent },
        { path: "/cart", component: ShoppingCart },
        { path: "/checkOut", component: CheckOut}, 
        { path: "/thanks/:id", component: OrderThanks},
        { path: "/login", component: Authentication },
        { path: "/admin", component: Admin,
            // beforeEnter(to, from, next) {
            //     if (dataStore.state.auth.authenticated) {
            //         next();
            //     } else {
            //         next("/login");
            //     }
            // },
            children: [
                { path: "products/:op(create|edit)/:id(\\d+)?", 
                      component: ProductEditor },
                { path: "products", component: ProductAdmin },
                { path: "orders", component: OrderAdmin },
                { path: "categories", component: CategoryAdmin },
                { path: "", redirect: "/admin/products"}

            ]
        },
        { path: "*", redirect: "/"}
    ]
})