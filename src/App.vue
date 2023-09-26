<template>
<router-view />

</template>

<script>

//import StoreComponent from './components/StoreComponent.vue';
import { mapActions } from "vuex";

export default {
  name: 'app',
  components: {
   
   //StoreComponent
  },methods:{
     
    ...mapActions(["getData"])
  },created(){

   

    this.getData();
  }
 
}
</script>

