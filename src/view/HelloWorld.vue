<template>
  <div class="map">
    <div id="map" class="map"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    // 创建地图实例
    var map = new BMap.Map("map");
    // 创建点坐标
    var point = new BMap.Point(116.404, 39.915);
    // 初始化地图，设置中心点坐标和地图级别
    map.centerAndZoom(point, 15);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.map {
  width: 100%;
  height: 100%;
}
</style>
