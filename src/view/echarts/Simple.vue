<template>
  <div class="map">
    <div id="map" class="map"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
// require("echarts/extension/bmap/bmap");
import "echarts/extension/bmap/bmap";

import data from "@/js/points-sample-data.js";

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
      title: {
        text: "海量打点 - 百度地图",
        left: "center"
      },
      tooltip: {
        trigger: "item"
      },
      bmap: {
        center: [120.631007, 31.308762],
        zoom: 6,
        roam: true,
        enableMapClick: false
      },
      series:[{
        id: 'scatter',
        name: '散点',
            type: 'scatter',
            coordinateSystem: 'bmap',
            // data: convertData(data),
            data: data.data,
            symbolSize: function(val) {
                return 10 //val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'purple'
                }
            }
      }]
    };

    map.setOption(option);
    map.on("click",params=>{
      console.log(params);
      
    })
    // console.log(data);
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
