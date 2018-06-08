<template>
  <div>
    <el-menu ref="elMenu" :default-active="$route.name" class="el-menu-vertical-demo" :unique-opened="true" @open="handleOpen" @close="handleClose" :router="true">
      <el-menu-item index="HelloWorld">
        <i class="fa fa-home"></i>
        <span slot="title">hello world</span>
      </el-menu-item>
      <el-submenu index="control">
        <template slot="title">
          <span slot="title">控件</span>
        </template>
        <el-menu-item index="control">control</el-menu-item>
      </el-submenu>
      <el-submenu index="overlay">
        <template slot="title">
          <span slot="title">覆盖物类</span>
        </template>
        <el-menu-item index="Polyline">Polyline</el-menu-item>
        <el-menu-item index="PolylineDraw">PolylineDraw</el-menu-item>
        <el-menu-item index="PointCollection">海量打点</el-menu-item>
        <el-menu-item index="FlashingStar">闪烁点</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span slot="title">右键菜单</span>
        </template>
        <el-menu-item index="ContextMenu">ContextMenu</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <span slot="title">地图类型</span>
        </template>
        <el-menu-item index="MapType">MapType</el-menu-item>
      </el-submenu>
      <el-submenu index="99">
        <template slot="title">
          <span slot="title">echarts</span>
        </template>
        <el-menu-item index="EchartSimple">简单实例</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style scope>
.el-menu-item .fa {
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  border-right: 0;
}
.el-menu-item.is-active {
  background: #e9eef3;
}
</style>

<script>
export default {
  name: "AppAside",
  data() {
    return {
      isCollapse: true
    };
  },
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
