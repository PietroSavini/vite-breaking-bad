<script>
  import AppHeader from "./components/AppHeader.vue";
  import AppMain from "./components/AppMain.vue";
  import {store} from "./store.js";
  import axios from "axios";
  export default{
    data(){
      return{
        store,
      }
      
    },

    components:{
      AppHeader,
      AppMain,
   },

   mounted(){
    axios.get(store.getUrl).then((resp)=>{
      this.store.cardArray = resp.data.data
    })
   }
  }
</script>

<template>
  <AppHeader/>
  <AppMain />
</template>

<style lang="scss">
  @use "./styles/general.scss"as *;

</style>
