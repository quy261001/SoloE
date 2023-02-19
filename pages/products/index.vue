<template>
    <h1 class="title-Product text-center text-[80px] pb-9 pt-8 text-[#fff] }}">Character</h1>
    <div class="product-Main px-[25px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6"> 
        <div v-for="(item, id) in products" :key="id">
            <ProductCard  :product = "item"/>
        </div>
    </div>
</template>

<script setup>
 import { ref } from 'vue';
    definePageMeta({
        layout: 'products'
    })
    const {data: products} = await useFetch('https://63ee0cf4d466e0c18ba84d91.mockapi.io/api/shopxp/Api/')
    console.log(products.value)
 useHead({
    title: 'Nuxt Dojo | Merch',
    meta: [
      { name: 'description', content: 'Nuxt 3 Merch'}
    ]
  })
</script>
<style scoped>
 .title-Product {
    font-family: 'Dancing Script', cursive;
    font-weight: 900;
    background: -webkit-linear-gradient(#eee, #168dd7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
 }
 .lisPage {
    padding: 10px;
    text-align: center;
    list-style: none;
 }
 .lisPage li{
    background-color: #ffffffBD; 
    display: inline-block;
    padding: 20px;
    margin: 0 10px;
    cursor: pointer;
}
.lisPage .active {
    background-color: #B192EF;
    color: #fff;
}
</style>