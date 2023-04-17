<script>
    import {store} from "../store"
    export default{
        data(){
            return{
                store,
            }
        }

    }
</script>

<template>
    <div class="col d-flex justify-content-center" v-for="(item,index) in store.cardArray" :key="item.id">
        <div class="ms_card">
            <div class="ms_card-header">
                <img :src="item.card_images[0].image_url" alt="">
            </div>
            <div class="ms_card-text">
                <p>{{ item.name }}</p>
                <p>{{item.archetype}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
 //card style
 .col{
    padding: .5rem .1rem;
    color:#fff;
    .ms_card{
        width: 200px;
        .ms_card-header{
            
            img{
                object-fit: cover;
                width: 100%;
                display: block;
            }
        }
        .ms_card-text{
            padding: .5rem .5rem;
            background-color: rgba(0, 0, 0, 0.7);
            height: 80px;
            border-bottom-left-radius: 15px ;
            border-bottom-right-radius:15px ;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p{
                margin-bottom: .2rem;
                font-size: 10px;
            }
        }
}
    }
</style>