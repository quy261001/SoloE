<template>
<div class="flex px-5">
    <div class="flex max-w-[50%]">
        <div class="text-[#fff] px-[20px] ProfileMain">
            <h2 class="text-center text-[64px]">{{ StoryProduct.name}}</h2>
            <p class="title-sp !text-[14px]">({{ StoryProduct.namesp }})</p>
            <p>Giới tính: {{ StoryProduct.gender }}</p>
            <p>Chủng loài: {{ StoryProduct.Race }}</p>
            <p>Quốc gia: {{ StoryProduct.Address }}</p>
            <p>Rank: {{ StoryProduct.rank }}</p>
            <p>Hệ: {{ StoryProduct.Class }}</p>
            <p>Bang Hội: {{ StoryProduct.Guild }}</p>
        </div>
        <img class="img-detail h-[400px] w-[200px] mr-14  rounded-xl" :src="`${StoryProduct.image}`" alt="">
    </div>
    <div class="StoryHero text-[#fff] max-w-[50%]">
            <h3 class="StoryHero text-center text-[42px]">Tiểu Sử</h3>
            <p>{{ StoryProduct.History }}</p>
    </div>
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
    font-size: 28px;
    font-family: 'Dancing Script', cursive;
    color: #CCFF66;
    text-align: center;
}
.ProfileMain h2 {
    font-family: 'Dancing Script', cursive;
    color: #FF3300;
}
.StoryHero h3 {
    font-family: 'Dancing Script', cursive;
    color: #FF3300;
}
.StoryHero p {
    font-family: 'Dancing Script', cursive;
    color: #CCFF66;
    font-size: 24px;  display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;  
    overflow: hidden;
}
</style>