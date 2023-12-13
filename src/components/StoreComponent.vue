<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-dark text-white">

        
          <a class="navbar-brand">SPORTS STORE</a>
            
       <CartSummary />
      </div>
    </div>
    <div class="row">
      <div class="col-3 bg-info p-2">
        <h1 class="text-white m-2">Categories</h1> 
       
          <category-controls class="mb-5" />
   
     

        
        <button class="btn btn-block btn-warning mt-5" 
                        v-on:click="setShowSearch(true)">
                    Search Store
                </button>  
      </div>
   
      <div class="col-9 bg-success p-2">
        <div>
          <h1 class="text-white m-2">Products</h1> 
        </div>
        
        <SearchProduct />
     
          <ProductList />
    
     
      </div>
    </div>
  
  </div>
</template>


<script>
import ProductList from "./ProductList";
import CategoryControls from "./CategoryControls";
import CartSummary from "./CartSummary"
import { mapMutations } from "vuex";
import SearchProduct from "./SearchProduct";
export default {
  name: "app",
  
  components: { ProductList, CategoryControls, CartSummary, SearchProduct},
  methods:{

    ...mapMutations(["setShowSearch"])
  }
};
</script>
