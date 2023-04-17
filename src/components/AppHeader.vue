<script >
    import {getImgUrl} from"../assests/helpers/helpers.js";
    export default{
        data(){
            return{
                logo: "logo.png"
            }
        },
        methods:{
            getImgUrl
        }
    }      
    
    
</script>

<template>
    <header>
        <div class="ms_wrapper">
            <img :src="getImgUrl(logo)" alt="">
        </div>
    </header>
</template>

<style scoped lang="scss">
header{
    height: 100px;
    background-color: black;
    .ms_wrapper{
        text-align: center;
    }
}
</style>