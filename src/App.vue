<template>
  <div id="app">
    <el-container class="container">
      <el-header>
        <div class="logo">vue-demo</div>
      </el-header>
      <el-container class="main">
        <el-aside>
          <app-aside></app-aside>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import AppAside from "./view/AppAside";
export default {
  name: "app",
  data() {
    return {
      title: "Hello My-Vue"
    };
  },
  components: {
    AppAside
  }
};
</script>

