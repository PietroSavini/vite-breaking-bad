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
    box-shadow: 0px 10px 10px rgba($color: #151414, $alpha: .5);
    position: relative;
    z-index: 2;
    .ms_wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;

        img{
            height: 100px;
            display: block;
        }
    }
}
</style>