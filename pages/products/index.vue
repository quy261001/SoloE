<template>
    <h1 class="title-Product text-center text-[80px] pb-9 pt-8 text-[#fff] }}">Character</h1>
    <!-- pagination -->
    <div class="product-Main px-[25px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6"> 
        <div v-for="(item, id) in productFilter" :key="id">
            <ProductCard  :product = "item"/>
        </div>
    </div>
    <nav class="pt-[80px] pb-5">
      <ul class="btn-main flex text-[#fff] justify-center gap-12">
        <li class="btn-main_item" v-if="currentPage > 1"><a @click.prevent="goToPage(currentPage - 1)">Previous</a></li>
        <li class="btn-main_item" v-for="page in pages" :key="page">
          <a :class="{ 'btn-active': page === currentPage }" @click.prevent="goToPage(page)">{{ page }}</a>
        </li>
        <li class="btn-main_item" v-if="currentPage < totalPages"><a @click.prevent="goToPage(currentPage + 1)">Next</a></li>
      </ul>
    </nav>

    <!-- Modal Filter -->
    <div class="modalSelect p-5">
      <div class="modalSelect-container">
        <div class="flex items-center justify-center">
          <span class="text-[#fff] text-[18px] mr-2 ">Tìm kiếm:</span>
          <input class="bg-transparent border-2 text-[#fff] border-[#000] rounder-2 rounded-md" v-model="searchQuery" type="text" name="" id="">
        </div>
      </div>
    </div>
</template>

<script setup>
 import { ref } from 'vue';
    definePageMeta({
        layout: 'products'
    })
    const {data: products} = await useFetch('https://63ee0cf4d466e0c18ba84d91.mockapi.io/api/shopxp/Api/')
 useHead({
    title: 'Nuxt Dojo | Merch',
    meta: [
      { name: 'description', content: 'Nuxt 3 Merch'}
    ]
  })

//   Pagination
  let limit = ref(12)
  let currentPage = ref(1)
  let totalPages = ref(0)
  let searchQuery = ref('')
  let totalPost = products.value.length
  totalPages = Math.ceil(totalPost / limit.value)
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
  }
  let productFilter = computed(() => {
    let result = [...products.value]
    result = result.filter(item => {
      totalPost = result.length
           return item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) 
        })
    const startIndex = (currentPage.value - 1) * limit.value;
    const endIndex = startIndex + limit.value;
    return result.slice(startIndex, endIndex);
  })
  function goToPage(page) {
    currentPage.value = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  
</script>
<style scoped>
 .title-Product {
    font-family: 'Dancing Script', cursive;
    font-weight: 900;
    background: -webkit-linear-gradient(#eee, #168dd7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
 }
 .modalSelect {
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  height: 25vh;
  top: 0;
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
.btn-main {
  border: 1px solid -webkit-linear-gradient(#940b0b, #021018);
  width: 90%;
  margin: 0 auto 50px auto;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  border-radius: 10px;
}
.btn-main_item {
  cursor: pointer;
  padding: 10px 20px;
  font-size:30px;
}
.btn-main_item a {
  padding: 0 12px;
  border-radius: 50%;
}
.btn-main_item a:hover {
  background: #fff;
  color: #23d5ab;
  transition: all 0.25s linear;
}
.classOption {
  font-size: 40px;
}
.btn-active {
  color: #23d5ab;
  background: #eee;
  border-radius: 50%;
}
</style>