<template>
    <div class="map">
        <div id="map" class="map"></div>
    </div>
</template>

<script>
import "@/js/points-sample-data.js";
export default {
  name: "PointCollection",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    // 创建地图实例
    var map = new BMap.Map("map", {}); // 创建Map实例
    map.centerAndZoom(new BMap.Point(105.0, 38.0), 5); // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(); //启用滚轮放大缩小
    if (document.createElement("canvas").getContext) {
      // 判断当前浏览器是否支持绘制海量点
      var points = []; // 添加海量点数据
      for (var i = 0; i < data.data.length; i++) {
        points.push(new BMap.Point(data.data[i][0], data.data[i][1]));
      }
      var options = {
        size: BMAP_POINT_SIZE_SMALL,
        shape: BMAP_POINT_SHAPE_WATERDROP,
        color: "#d340c3"
      };
      var pointCollection = new BMap.PointCollection(points, options); // 初始化PointCollection
      pointCollection.addEventListener("click", function(e) {
        console.log(e);

        alert("单击点的坐标为：" + e.point.lng + "," + e.point.lat); // 监听点击事件
      });
      map.addOverlay(pointCollection); // 添加Overlay
    } else {
      alert("请在chrome、safari、IE8+以上浏览器查看本示例");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
