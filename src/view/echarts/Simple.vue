<template>
  <div class="map">
    <div id="map" class="map"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
// require("echarts/extension/bmap/bmap");
import "echarts/extension/bmap/bmap";

export default {
  name: "EchartSimple",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    // 创建地图实例
    var map = echarts.init(document.getElementById("map"));
    var option = {
      bmap: {
        center: [120.631007, 31.308762],
        zoom: 12,
        roam: true,
        enableMapClick: false
      }
    };

    map.setOption(option);
    console.log(data);
    
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
