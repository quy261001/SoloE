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
                            <li><NuxtLink to="/">Cốt Truyện</NuxtLink></li> 
                            <li><NuxtLink to="/products">Danh Sách Nhân Vật</NuxtLink></li>
                        </ul>
                    </div>
                    <div class="container-r relative">
                        <input class="container-r-input" type="text" name="" id="">
                        <span class="material-icons text-[#fff] icon-search">
                            search
                        </span>
                    </div>
                </nav>
            </header>
             <!-- Content -->
            <div class="container p-4">
                <slot />
            </div>
        </div>
    </div>
<!-- trailer -->
<div class="sp-container">
	<h1 class="text-[red] absolute z-[999999] text-[40px] cursor-pointer font-bold right-0 mr-20 mt-8" @click="skipEvent">SKIP</h1>
	<div class="sp-content">
		<div class="sp-globe"></div>
		<img class="w-full h-full img-1" src="@/assets/img/BGA1.jpg" alt="">
		<h2 class="frame-1">Chào mừng bạn</h2>
		<h2 class="frame-2">Đến với</h2>
		<h2 class="frame-3">Cốt Truyện </h2>
		<h2 class="frame-4">Và Nhân Vật!</h2>
		<h2 class="frame-5">
			<span>Solo </span>
			<span>Leveling</span>
			<span>gg!</span>
		</h2>
		<button @click="closeTrailer" class="sp-circle-link">Bắt Đầu</button>
	</div>
</div> -->
</template>

<script setup>  
    function closeTrailer() {
        document.querySelector(".sp-container").style.display = 'none'; 
    }
	function skipEvent() {
		document.querySelector(".sp-container").style.display = 'none'; 
	}
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
    .img-main {
        position: absolute;
        top: 0;
        right: 22%;
        width: 20%;
		height: 100%;
    }



/* Trailer */
body {
	background: #310404 url(https://i.ytimg.com/vi/wOvQAhzWCrM/maxresdefault.jpg) no-repeat center center fixed; 
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	font-family: 'Barlow', sans-serif;
}
.container {
	width: 100%;
	position: relative;
	overflow: hidden;
}
a {
	text-decoration: none;
}
h1.main, p.demos {
	-webkit-animation-delay: 18s;
	-moz-animation-delay: 18s;
	-ms-animation-delay: 18s;
	animation-delay: 18s;
}
.sp-container {
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	z-index: 0;
	background: -webkit-radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3) 35%, rgba(0, 0, 0, 0.7));
	background: -moz-radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3) 35%, rgba(0, 0, 0, 0.7));
	background: -ms-radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3) 35%, rgba(0, 0, 0, 0.7));
	background: radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3) 35%, rgba(0, 0, 0, 0.7));
}
.sp-content {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0px;
	top: 0px;
	z-index: 1000;
}
.sp-container h2 {
	position: absolute;
	top: 50%;
	line-height: 100px;
	height: 90px;
	margin-top: -50px;
	font-size: 90px;
	width: 100%;
	text-align: center;
	color: transparent;
	-webkit-animation: blurFadeInOut 3s ease-in backwards;
	-moz-animation: blurFadeInOut 3s ease-in backwards;
	-ms-animation: blurFadeInOut 3s ease-in backwards;
	animation: blurFadeInOut 3s ease-in backwards;
}
.sp-container h2.frame-1{
	-webkit-animation-delay: 0s;
	-moz-animation-delay: 0s;
	-ms-animation-delay: 0s;
	animation-delay: 0s;
	
}
.sp-container h2.frame-2 {
	-webkit-animation-delay: 3s;
	-moz-animation-delay: 3s;
	-ms-animation-delay: 3s;
	animation-delay: 3s;
}
.sp-container h2.frame-3 {
	-webkit-animation-delay: 6s;
	-moz-animation-delay: 6s;
	-ms-animation-delay: 6s;
	animation-delay: 6s;
}
.sp-container h2.frame-4 {
	font-size: 100px;
	-webkit-animation-delay: 9s;
	-moz-animation-delay: 9s;
	-ms-animation-delay: 9s;
	animation-delay: 9s;
}
.sp-container h2.frame-5 {
	-webkit-animation: none;
	-moz-animation: none;
	-ms-animation: none;
	animation: none;
	color: transparent;
	text-shadow: 0px 0px 1px #fff;
}
.sp-container h2.frame-5 span {
	-webkit-animation: blurFadeIn 3s ease-in 12s backwards;
	-moz-animation: blurFadeIn 1s ease-in 12s backwards;
	-ms-animation: blurFadeIn 3s ease-in 12s backwards;
	animation: blurFadeIn 3s ease-in 12s backwards;
	color: transparent;
	text-shadow: 0px 0px 1px #fff;
}
.sp-container h2.frame-5 span:nth-child(2) {
	-webkit-animation-delay: 13s;
	-moz-animation-delay: 13s;
	-ms-animation-delay: 13s;
	animation-delay: 13s;
}
.sp-container h2.frame-5 span:nth-child(3) {
	-webkit-animation-delay: 14s;
	-moz-animation-delay: 14s;
	-ms-animation-delay: 14s;
	animation-delay: 14s;
}
.sp-globe {
	position: absolute;
	width: 282px;
	height: 273px;
	left: 50%;
	top: 50%;
	margin: -137px 0 0 -141px;
	background: transparent url(http://web-sonick.zz.mu/images/sl/globe.png) no-repeat top left;
	-webkit-animation: fadeInBack 3.6s linear 14s backwards;
	-moz-animation: fadeInBack 3.6s linear 14s backwards;
	-ms-animation: fadeInBack 3.6s linear 14s backwards;
	animation: fadeInBack 3.6s linear 14s backwards;
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";
	filter: alpha(opacity=30);
	opacity: 0.3;
	-webkit-transform: scale(5);
	-moz-transform: scale(5);
	-o-transform: scale(5);
	-ms-transform: scale(5);
	transform: scale(5);
}
.sp-circle-link {
	position: absolute;
	left: 50%;
	bottom: 100px;
	margin-left: -50px;
	text-align: center;
	line-height: 100px;
	width: 100px;
	height: 100px;
	background: #fff;
	color: #3f1616;
	font-size: 25px;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	-webkit-animation: fadeInRotate 1s linear 16s backwards;
	-moz-animation: fadeInRotate 1s linear 16s backwards;
	-ms-animation: fadeInRotate 1s linear 16s backwards;
	animation: fadeInRotate 1s linear 16s backwards;
	-webkit-transform: scale(1) rotate(0deg);
	-moz-transform: scale(1) rotate(0deg);
	-o-transform: scale(1) rotate(0deg);
	-ms-transform: scale(1) rotate(0deg);
	transform: scale(1) rotate(0deg);
}
.sp-circle-link:hover {
	background: #85373b;
	color: #fff;
}
/**/

@-webkit-keyframes blurFadeInOut {
	0% {
		opacity: 0;
		text-shadow: 0px 0px 40px #fff;
		-webkit-transform: scale(1.3);
	}
	20%, 75% {
		opacity: 1;
		text-shadow: 0px 0px 1px #fff;
		-webkit-transform: scale(1);
	}
	100% {
		opacity: 0;
		text-shadow: 0px 0px 50px #fff;
		-webkit-transform: scale(0);
	}
}
@-webkit-keyframes blurFadeIn {
	0% {
		opacity: 0;
		text-shadow: 0px 0px 40px #fff;
		-webkit-transform: scale(1.3);
	}
	50% {
		opacity: 0.5;
		text-shadow: 0px 0px 10px #fff;
		-webkit-transform: scale(1.1);
	}
	100% {
		opacity: 1;
		text-shadow: 0px 0px 1px #fff;
		-webkit-transform: scale(1);
	}
}
@-webkit-keyframes fadeInBack {
	0% {
		opacity: 0;
		-webkit-transform: scale(0);
	}
	50% {
		opacity: 0.4;
		-webkit-transform: scale(2);
	}
	100% {
		opacity: 0.2;
		-webkit-transform: scale(5);
	}
}
@-webkit-keyframes fadeInRotate {
	0% {
		opacity: 0;
		-webkit-transform: scale(0) rotate(360deg);
	}
	100% {
		opacity: 1;
		-webkit-transform: scale(1) rotate(0deg);
	}
}
/**/

@-moz-keyframes blurFadeInOut {
	0% {
		opacity: 0;
		text-shadow: 0px 0px 40px #fff;
		-moz-transform: scale(1.3);
	}
	20%, 75% {
		opacity: 1;
		text-shadow: 0px 0px 1px #fff;
		-moz-transform: scale(1);
	}
	100% {
		opacity: 0;
		text-shadow: 0px 0px 50px #fff;
		-moz-transform: scale(0);
	}
}
@-moz-keyframes blurFadeIn {
	0% {
		opacity: 0;
		text-shadow: 0px 0px 40px #fff;
		-moz-transform: scale(1.3);
	}
	100% {
		opacity: 1;
		text-shadow: 0px 0px 1px #fff;
		-moz-transform: scale(1);
	}
}
@-moz-keyframes fadeInBack {
	0% {
		opacity: 0;
		-moz-transform: scale(0);
	}
	50% {
		opacity: 0.4;
		-moz-transform: scale(2);
	}
	100% {
		opacity: 0.2;
		-moz-transform: scale(5);
	}
}
@-moz-keyframes fadeInRotate {
	0% {
		opacity: 0;
		-moz-transform: scale(0) rotate(360deg);
	}
	100% {
		opacity: 1;
		-moz-transform: scale(1) rotate(0deg);
	}
}
/**/

@keyframes blurFadeInOut {
	0% {
		opacity: 0;
		text-shadow: 0px 0px 40px #fff;
		transform: scale(1.3);
	}
	20%, 75% {
		opacity: 1;
		text-shadow: 0px 0px 1px #fff;
		transform: scale(1);
	}
	100% {
		opacity: 0;
		text-shadow: 0px 0px 50px #fff;
		transform: scale(0);
	}
}
@keyframes blurFadeIn {
	0% {
		opacity: 0;
		text-shadow: 0px 0px 40px #fff;
		transform: scale(1.3);
	}
	50% {
		opacity: 0.5;
		text-shadow: 0px 0px 10px #fff;
		transform: scale(1.1);
	}
	100% {
		opacity: 1;
		text-shadow: 0px 0px 1px #fff;
		transform: scale(1);
	}
}
@keyframes fadeInBack {
	0% {
		opacity: 0;
		transform: scale(0);
	}
	50% {
		opacity: 0.4;
		transform: scale(2);
	}
	100% {
		opacity: 0.2;
		transform: scale(5);
	}
}
@keyframes fadeInRotate {
	0% {
		opacity: 0;
		transform: scale(0) rotate(360deg);
	}
	100% {
		opacity: 1;
		transform: scale(1) rotate(0deg);
	}
}
</style>