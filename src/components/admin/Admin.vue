
<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col bg-secondary text-white">
                <a class="navbar-brand">SPORTS STORE Admin</a>
            </div>
        </div>
        <div class="row">
            <div class="col-3 bg-secondary p-2">
                <router-link to="/admin/products" class="btn btn-block btn-primary" 
                        active-class="active">
                    Products
                </router-link>
                <router-link to="/admin/orders"  class="btn btn-block btn-primary" 
                        active-class="active">
                    Orders
                </router-link> 
                 <router-link to="/admin/categories"  class="btn btn-block btn-primary" 
                        active-class="active">
                    Categories
                </router-link>                             
            </div>
            <div class="col-9 p-2">
                <router-view />
            </div>
        </div>
    </div>
</template>



<style>

btn btn-block btn-primary{
background: #ffc600;
  border: 0;
  padding: 10px 20px;
    

}

</style>




