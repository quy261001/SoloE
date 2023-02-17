<template>
<div class="flex item-center justify-evenly px-5">
        <div class="text-[#fff] px-[20px] ProfileMain">
            <h2 class="text-[50px]">{{ StoryProduct.name}}</h2>
            <p class="title-sp">({{ StoryProduct.namesp }})</p>
            <p>Giới tính: {{ StoryProduct.gender }}</p>
            <p>Chủng loài: {{ StoryProduct.Race }}</p>
            <p>Quốc gia: {{ StoryProduct.Address }}</p>
            <p>Rank: {{ StoryProduct.rank }}</p>
            <p>Hệ: {{ StoryProduct.Class }}</p>
            <p>Bang Hội: {{ StoryProduct.Guild }}</p>
        </div>
        <img class="img-detail h-[100%] w-[200px] mr-14  rounded-xl" :src="`${StoryProduct.image}`" alt="">
</div>
   
</template>
<script setup>
const {StoryProduct} = defineProps(['StoryProduct'])
</script>
<style scoped>
.attack {
    display: block;
    height: 20px;
    background: red;
    margin-top: 3px;
}
.css-flex {
    display: flex;
    align-items: center;
    gap: 20px;
}
.ProfileMain p{
    font-size: 30px;
    font-family: 'Dancing Script', cursive;
    color: #CCFF66;
    text-align: center;
}
.ProfileMain h2 {
    font-family: 'Dancing Script', cursive;
    color: #FF3300;
}
</style>