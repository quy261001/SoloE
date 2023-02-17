<template>
    <h1 class="text-center text-[60px] pb-9 pt-8 text-[#fff] }}">Character</h1>
    <div class="px-[25px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6"> 
        <div v-for="(item, id) in products" :key="id">
            <ProductCard  :product = "item"/>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
    const url = 'https://63ee0cf4d466e0c18ba84d91.mockapi.io/api/shopxp/Api/'
    //fetch the products
    //  const {data: products, pending, errors} = await useAsyncData("product_key", async () => {
    //      return $fetch(url)
    //  })
 const {data: products} = await useFetch('https://63ee0cf4d466e0c18ba84d91.mockapi.io/api/shopxp/Api/')
 useHead({
    title: 'Nuxt Dojo | Merch',
    meta: [
      { name: 'description', content: 'Nuxt 3 Merch'}
    ]
  })
</script>

<style scoped>
</style>