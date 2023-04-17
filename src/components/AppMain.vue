<script>
    import{getImgUrl} from "../assests/helpers/helpers.js"
    import AppCard from "./AppCard.vue"
    export default{
        data(){
            return{
                imgPath:"bg.png",
            }
            
        },
        components:{
            AppCard,
        },
        methods:{
            getImgUrl
        }
    }
    
</script>

<template>
    <section>
        <div class="ms_container">
            <img :src="getImgUrl(imgPath)" alt="">
            <main>
                <div class="container">
                    <div class="row ">
                        <AppCard />
                    </div>
                </div>
            </main>
        </div>
    </section>
</template>

<style scoped lang="scss">
    section{
        background-color:#0d0c0c;
        background-image: repeating-linear-gradient(-45deg, rgba(33, 31, 31, 0.1), rgba(51, 49, 49, 0.1) 1px, transparent 1px, transparent 6px);
        background-size: 4px 4px;
        .ms_container{
            width: 95%;
            position: relative;
            margin: 0 auto;
            overflow-y: auto;
            img{
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                z-index: 1;
                border-radius: 15px;
                box-shadow: inset 0 0 10px #000000;
            }
            main{
                position: relative;
                margin: 0 auto;
                padding: 2rem 0;
                z-index: 2;
                max-height: 700px;
                overflow-y: auto;
                border-radius: 15px;
                box-shadow: inset 0 0 10px 10px black;
                &::-webkit-scrollbar {
                    width: 2px;    
                }
                
            }   
        }
    }
</style>