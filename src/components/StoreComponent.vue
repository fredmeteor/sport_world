<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-dark text-white">
        <a class="navbar-brand">SPORTS STORE</a>
      </div>
    </div>
    <div class="row">
      <div class="col-3 bg-info p-2">
        <h1><span>Categories</span></h1> 
        <category-controls />
      </div>
   
      <div class="col-9 p-2">
        <h1><span>Products</span></h1> 
        <ProductList />
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "./ProductList";
import CategoryControls from "./CategoryControls";

export default {
  name: "app",
  
  components: { ProductList, CategoryControls },
};
</script>
