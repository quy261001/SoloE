<template>
    <img class="img-container" src="@/assets/img/code1.png" alt="">
   <div class="wrapper-main">
       <div class="wrapper-main__content">
           <header class="shadow-sm bg">
               <nav class="container mx-auto p-2 flex items-center justify-between">
                   <div class="flex items-center gap-10">
                       <div class="w-[12%]">
                           <NuxtLink to="/">
                               <img class="max-w-[125%]" src="@/assets/img/logoS.png" alt="">
                           </NuxtLink>
                       </div> 
                       <ul class="Nav flex gap-10 text-[28px] text-[#fff]">    
                           <li><NuxtLink to="/products">Nhân Vật Khác</NuxtLink></li>
                           <select class="text-[#000]" v-model="handleSkill">
                               <option  :value="true">Nhân vật</option>
                               <option :value="false">Kỹ năng</option>
                           </select>
                       </ul>
                   </div>               
               </nav>
           </header>
           
            <!-- Story -->
            <template v-if="handleSkill">
               <Story :StoryProduct="productDetai" />
            </template>
              <template v-else>
                 <!-- Skill -->
                 <skill :SkillProduct="productDetai"/>
              </template>
          
       </div>
   </div>
</template>

<script setup>
import { ref } from 'vue';
const {productDetai} = defineProps(['productDetai']);
const handleSkill = ref(true);
</script>

<style scoped>
.router-link-exact-active {
       color: #12b488;
   }
   .Nav {
       font-family: 'Dancing Script', cursive;
   }
   .img-container {
       position: absolute;
       z-index: -999;
       height: 100vh;
       width: 100%;
   }
   .wrapper-main {
       position: fixed;
       top: 0;
       right: 0;
       bottom: 0;
       left: 0;
       background: rgba(0, 0, 0, 0.25);
   }
   .wrapper-main__content {
       position: fixed;
       width: 85%;
       height: 70%;
       left: 50%;
       top: 50%;
       transform: translate(-50%, -50%);
       background: rgba(0, 0, 0, 0.7);
       border-radius: 12px;
   }
   .container-r-input {
       background: transparent;
       border-radius: 25px;
       border: 1px solid #fff;
       padding: 0 10px;
       color: #fff;
       height: 30px;
   }
   .icon-search {
       position:absolute;
       right: 5%;
       top: 15%;
       font-size: 20px;
       cursor: pointer;
   }
</style>