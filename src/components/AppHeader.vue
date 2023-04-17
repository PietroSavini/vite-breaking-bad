<script >
    import {getImgUrl} from "../assests/helpers/helpers.js";
    export default{
        data(){
            return{
                logo: "logo.png",
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
    background-color: black;
    .ms_wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        img{
            height: 150px;
            display: block;
        }
    }
}
</style>