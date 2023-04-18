<script>
    import{getImgUrl} from "../assests/helpers/helpers.js";
    import AppCard from "./AppCard.vue";
    import {store} from "../store.js";
    export default{
        emits:["filter"],
        data(){
            return{
                store,
                imgPath:"bg.png",
                options:[
                    "Alien",
                    "Ally of Justice", 
                    "Ancient Gear",
                ]
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
        <select name="" id="" v-model="store.selectedValue" @change="$emit('filter')">
            <option value="">--filter by Archetype--</option>
            <option v-for="option in options" :value="option">{{option}}</option>
        </select>
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
        position: relative;
        

        select{
            position: absolute;
            top:20px;
            left:50%;
            transform:translateX(-50%);
            background-color: #323232;
            color: #fff;
            border-radius: 5px;
            outline: none;
        }
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