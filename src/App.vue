<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
<StoreGen />

</template>

<script>
import StoreGen from './components/StoreGen.vue'
import { mapActions } from "vuex";
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
   
    StoreGen
  },
  methods: {
    ...mapActions(["getData"])
  },
  created() {
      this.getData()
  }
}
</script>

