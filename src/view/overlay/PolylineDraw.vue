<template>
  <div class="map">
    <div id="map" class="map"></div>
  </div>
</template>

<script>
export default {
  name: "OverlayPolyline",
  data() {
    return {
      msg: ""
    };
  },
  mounted() {
    // 创建地图实例
    let map = new BMap.Map("map");
    // 创建点坐标
    let centerPoint = new BMap.Point(116.404, 39.915);
    // 初始化地图，设置中心点坐标和地图级别
    map.centerAndZoom(centerPoint, 15);
    // 开启鼠标滚轮缩放
    map.enableScrollWheelZoom(true);

    let pois = [];
    // 随机向地图添加25个标注
    let bounds = map.getBounds();
    let sw = bounds.getSouthWest();
    let ne = bounds.getNorthEast();
    let lngSpan = Math.abs(sw.lng - ne.lng);
    let latSpan = Math.abs(ne.lat - sw.lat);
    for (let i = 0; i < 5; i++) {
      let markPoint = new BMap.Point(
        sw.lng + lngSpan * (Math.random() * 0.7),
        ne.lat - latSpan * (Math.random() * 0.7)
      );
      addMarker(markPoint);
      console.log(markPoint);
    }

    /**
     * @description 添加标注
     * @param {Array} point 点坐标
     */
    function addMarker(point) {
      let marker = new BMap.Marker(point);
      map.addOverlay(marker);
      marker.addEventListener("click", e => {
        let ePoint = e.target.point;
        if (pois.indexOf(ePoint) === -1) {
          pois.push(ePoint);
          polyline.setPath(pois);
          linePois[0] = ePoint;
        } else if (linePois.length === 0) {
          linePois[0] = ePoint;
        }
      });
      marker.addEventListener("dblclick", e => {
        console.log(e);
        linePois = [];
        line.setPath(linePois);
      });
    }
    let polyline = new BMap.Polyline(pois, {
      strokeWeight: "5", //折线的宽度，以像素为单位
      strokeOpacity: 0.8, //折线的透明度，取值范围0 - 1
      strokeColor: "#f47f2e" //折线颜色
    });
    map.addOverlay(polyline);

    let linePois = [];
    let line = new BMap.Polyline(linePois, {
      strokeWeight: "5", //折线的宽度，以像素为单位
      strokeOpacity: 0.8, //折线的透明度，取值范围0 - 1
      strokeColor: "#f00", //折线颜色
      strokeStyle: "dashed"
    });
    map.addOverlay(line);

    var overlays = [];
    var styleOptions = {
      strokeColor: "#f00", //边线颜色。
      fillColor: "#f00", //填充颜色。当参数为空时，圆形将没有填充效果。
      strokeWeight: 3, //边线的宽度，以像素为单位。
      strokeOpacity: 0.8, //边线透明度，取值范围0 - 1。
      fillOpacity: 0.6, //填充的透明度，取值范围0 - 1。
      strokeStyle: "solid" //边线的样式，solid或dashed。
    };
    map.addEventListener("mousemove", e => {
      //console.log(e);
      if (linePois.length > 0) {
        linePois[1] = e.point;
        line.setPath(linePois);
      }
    });
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.map {
  width: 100%;
  height: 100%;
}
</style>
