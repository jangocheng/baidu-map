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
      marker.addEventListener("click",clickMarker);
      map.addOverlay(marker);
    }
    let polyline = new BMap.Polyline(pois, {
        enableEditing: false, //是否启用线编辑，默认为false
        enableClicking: false, //是否响应点击事件，默认为true
        strokeWeight: "10", //折线的宽度，以像素为单位
        strokeOpacity: 0.8, //折线的透明度，取值范围0 - 1
        strokeColor: "#f47f2e" //折线颜色
      });
    function clickMarker(e) {
      console.log(e);
      pois.push(e.target.point);
      polyline.setPath(pois);
      if(pois.length>0){
        map.addOverlay(polyline);
      }
      


      
    }
    /**
     * @description 添加折线
     */
    function addPolyline(pois) {
      // 折线
      let polyline = new BMap.Polyline(pois, {
        enableEditing: false, //是否启用线编辑，默认为false
        enableClicking: false, //是否响应点击事件，默认为true
        strokeWeight: "10", //折线的宽度，以像素为单位
        strokeOpacity: 0.8, //折线的透明度，取值范围0 - 1
        strokeColor: "#f47f2e" //折线颜色
      });
      // 添加覆盖物
      map.addOverlay(polyline);
    }

    var overlays = [];
    var overlaycomplete = function(e) {
      console.log(e);
      
    };
    var styleOptions = {
      strokeColor: "#f00", //边线颜色。
      fillColor: "#f00", //填充颜色。当参数为空时，圆形将没有填充效果。
      strokeWeight: 3, //边线的宽度，以像素为单位。
      strokeOpacity: 0.8, //边线透明度，取值范围0 - 1。
      fillOpacity: 0.6, //填充的透明度，取值范围0 - 1。
      strokeStyle: "solid" //边线的样式，solid或dashed。
    };
    //实例化鼠标绘制工具
    var drawingManager = new BMapLib.DrawingManager(map, {
      isOpen: false, //是否开启绘制模式
      enableDrawingTool: true, //是否显示工具栏
      drawingToolOptions: {
        anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
        offset: new BMap.Size(5, 5), //偏离值
        drawingModes : [
            BMAP_DRAWING_POLYLINE
         ]
      },
      //circleOptions: styleOptions, //圆的样式
      //polylineOptions: styleOptions, //线的样式
      //polygonOptions: styleOptions, //多边形的样式
      //rectangleOptions: styleOptions //矩形的样式
    });
    //添加鼠标绘制工具监听事件，用于获取绘制结果
    drawingManager.addEventListener("overlaycomplete", overlaycomplete);
    function clearAll() {
      for (var i = 0; i < overlays.length; i++) {
        map.removeOverlay(overlays[i]);
      }
      overlays.length = 0;
    }
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
