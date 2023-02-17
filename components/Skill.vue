<template>
  <div class="power px-3 flex gap-5">
    <img
      class="img-detail h-[100%] w-[210px] mr-14 rounded-xl"
      :src="`${SkillProduct.image}`"
      alt=""
    />
    <ul class="flex flex-col gap-[15px]">
      <li
        v-for="(i, id) in SkillProduct.SkillAttack"
        :key="id"
        class="text-[#fff] css-flex"
      >
        Tấn công: <div class="Skill-main__item"><span :style="{ width: i + 'px'}" class="skill-main_container"></span>
        <span>{{ i }}</span></div>
      </li>
      <li
        v-for="(i, id) in SkillProduct.SkillDefense"
        :key="id"
        class="text-[#fff] css-flex"
      >
        Phòng ngự: <div class="Skill-main__item"><span :style="{ width: i + 'px' }" class="skill-main_container"></span>
        <span>{{ i }}</span></div>
      </li>
      <li
        v-for="(i, id) in SkillProduct.SkillAgile"
        :key="id"
        class="text-[#fff] css-flex"
      >
        Nhanh nhẹn:<div class="Skill-main__item"><span :style="{ width: i + 'px' }" class="skill-main_container"></span>
        <span>{{ i }}</span></div>
      </li>
      <li
        v-for="(i, id) in SkillProduct.SkillEnergy"
        :key="id"
        class="text-[#fff] css-flex"
      >
        Năng lượng: <div class="Skill-main__item"><span :style="{ width: i + 'px' }" class="skill-main_container"></span>
        <span>{{ i }}</span></div>
      </li>
      <li
        v-for="(i, id) in SkillProduct.SkillPotential"
        :key="id"
        class="text-[#fff] css-flex"
      >
        Tiềm lực: <div class="Skill-main__item"><span :style="{ width: i + 'px' }" class="skill-main_container"></span>
        <span>{{ i }}</span></div>
      </li>
    </ul>
    <div class="text-[#fff] w-[100%] px-[40px] profileHero-right">
      <h3 class="text-[50px] text-center mb-1">Thông tin Kỹ Năng</h3>
        <ul class="profileHero flex flex-col gap-4">
          <li class="skill">Skill: <span>{{ SkillProduct.skill }}</span></li>
          <li class="skill">Vũ Khí: <span>{{ SkillProduct.Weapon }}</span></li>     
        </ul>
    </div>
  </div>
</template>

<script setup>
const { SkillProduct } = defineProps(["SkillProduct"]);
console.log(SkillProduct.HeroPower);
</script>

<style scoped>
.skill-main_container {
  height: 20px;
  display: inline-block;
}
.css-flex:nth-child(1) .skill-main_container{
  background-color: #FF0000;
}
.css-flex:nth-child(2) .skill-main_container{
  background-color: #778899;
}
.css-flex:nth-child(3) .skill-main_container{
  background-color: #FFFF33	;
}
.css-flex:nth-child(4) .skill-main_container{
  background-color: #0099FF;
}
.css-flex:nth-child(5) .skill-main_container{
  background-color: #FF00FF;
}
.Skill-main__item {
  display: flex;
  align-items: center;
  gap: 20px;
}
.css-flex {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-family: 'Dancing Script', cursive;
}
.profileHero-right h3 {
  font-family: 'Dancing Script', cursive;
  color:#FF3300;
}
.profileHero li {
  font-size: 30px;
  font-family: 'Dancing Script', cursive;
}

.skill {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  color: #00EE00 !important;
}
</style>