<template>
  <div>
    <!-- <el-menu active-text-color="#386CFD" background-color="#2E69EA" class="el-menu-vertical-demo"
        :collapse-transition="false" default-active="2" text-color="#FFFFFF" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse"> -->
    <el-menu active-text-color="#386CFD" background-color="#2E69EA" class="el-menu-vertical-demo"
      :collapse-transition="false" default-active="2" text-color="#FFFFFF" :collapse="isCollapse">
      <el-menu-item index="1">
        <SvgIcon name="home" class="icon-svg" />
        <span slot="">&nbsp;&nbsp;首页</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <SvgIcon name="media" class="icon-svg" />
          <span>&nbsp;&nbsp;图片管理</span>
        </template>
        <el-menu-item index="1-1">
          <SvgIcon name="media1" class="icon-svg" />
          <span>&nbsp;&nbsp;图片1</span>
        </el-menu-item>
        <el-menu-item index="1-2">
          <SvgIcon name="media2" class="icon-svg" />
          <span>&nbsp;&nbsp;图片2</span>
        </el-menu-item>
        <el-sub-menu index="1-4">
          <template #title>
            <SvgIcon name="img" class="icon-svg" />
            <span>&nbsp;&nbsp;图片3</span>
          </template>
          <el-menu-item index="1-4-1">
            <SvgIcon name="img" class="icon-svg" />
            <span>&nbsp;&nbsp;图片三级子菜单</span>
          </el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <SvgIcon name="collection" class="icon-svg" />
          <span>&nbsp;&nbsp;收藏管理</span>
        </template>
        <el-menu-item index="3">
          <SvgIcon name="collection" class="icon-svg" />
          <span class="icon-text">&nbsp;&nbsp;收藏</span>
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item index="4">
        <SvgIcon name="about" class="icon-svg" />
        <span>&nbsp;&nbsp;设置</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script lang="ts">

export default ({
  props:['isCollapse'],
  data:function () {
    return {

    }
  }
})
</script>


<style>
.is-active:before {
  content: '';
  position: absolute;
  height: 50px;
  width: 4px;
  left: 0;
  background: #ffffff;
}

.is-active {
  background: #EDF2FF !important;
  color: #386CFD !important;

  /*background: linear-gradient(to right, rgba(56, 108, 253, 0.1) , rgba(56, 108, 253, 0)) !important;*/
}
</style>