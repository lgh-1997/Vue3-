<template v-slot:default>
  <div :class="['content',isCollapse?'menu--fold':'menu--unfold']">
    <!-- 侧边菜单栏 -->
    <div class="menuLeft">
      <div class="menu-nav-header">
        <span>{{isCollapse?'控制台':'管理控制台'}}</span>
      </div>
      <!--todo 菜单栏组件 -->
      <!--todo 菜单栏组件 -->
      <SliderBar :isCollapse="isCollapse"></SliderBar>
    </div>
    <!-- 右边内容 -->
    <div class="content-main">
      <div class="navTop horizontalView">
        <div class="nav_tools horizontalView">
          <SvgIcon :name="isCollapse ? 'expand' : 'fold'" class="icon-svg" @click="isCollapse=!isCollapse" />
        </div>
      </div>
      <!-- todo 内容组件 -->

    </div>
  </div>
</template>

<script lang="ts">
import SliderBar from '../../components/overall/SliderBar/index.vue';
  
export default {
    data: function () {
        return {
            isCollapse: false
        };
    },
    methods: {},
    components: { SliderBar }
}
</script>
 
<style>
@import url('../../assets/common/css/home.css');
</style>
 