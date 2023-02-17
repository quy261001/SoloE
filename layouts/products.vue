<template>
    <div>
         <slot />
     </div>  
   
 </template>
 
 <script setup>
 
 </script>
 
 <style scoped>
      .router-link-exact-active {
         color: #12b488;
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
 </style>