<template>
  
<router-view />

</template>

<script>

//import StoreComponent from './components/StoreComponent.vue';
import { mapActions } from "vuex";

export default {
  name: 'app',
 
  methods:{
     
    ...mapActions({getData: "getData",
    initializeCart: "cart/initializeCart"
  
  
  })

    
  },created(){

   

    this.getData();
    this.initializeCart(this.$store);
  }
 
}
</script>

