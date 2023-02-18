<template>
        <div class="charater-modal">
            <img class="img-container" src="@/assets/img/BGA1.jpg" alt="">
        </div>
        <NuxtLink to="/">
            <img class="max-w-[80%] mx-auto" src="@/assets/img/logoS.png" alt="">
        </NuxtLink>
        <div class="charater">
            <img class="h-[300px] w-[200px] mx-auto charater-img" :src="`${product.image}`" alt="">
            <h3 class="text-center text-[32px] text-[#fff] mt-1">{{ product.name }}</h3>
            <p class="text-center text-[yellow]">Rank: {{ product.rank }}</p>
                <NuxtLink :to="`/products/${product.id}`">
                     <button class="text-center w-full charater-btn">Chi Tiết</button>
                </NuxtLink>    
        </div>   
</template>
    
    <script setup>
        const {product} = defineProps(['product']);
    </script>
    
    <style scoped>
        .charater-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -999;
            background: rgba(0, 0, 0, 0.4);
        }
        .img-container {
            position: absolute;
            z-index: -999;
            height: 100vh;
            width: 100%;
        }
        .charater {
            border: 1px solid #fff;
            border-radius: 12px;
            padding: 10px;
            background:  radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0, linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%);background-size: 470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%;background-color: #840b2a;
    ;
        }
        .charater-img {
            border-radius: 5px;
        }
        .charater-btn {
            padding: 10px;
            background-color: rgba(23, 23, 19, 0.8);
            color: #fff;
            border-radius: 25px;
            margin-top: 10px;
            transition: all 0.25s linear;
        }
        .charater-btn:hover {
            background-color: #fff;
            color: #000;
        }
    </style>