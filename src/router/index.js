import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/HelloWorld'

/* overlay - 覆盖物 */
import Polyline from '@/view/overlay/Polyline'
import PolylineDraw from '@/view/overlay/PolylineDraw'
import PointCollection from '@/view/overlay/PointCollection'
import FlashingStar from '@/view/overlay/FlashingStar'

/* echarts - 一百度地图为基础的图表 */
import EchartSimple from '@/view/echarts/Simple'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 覆盖物
    {
      path: '/Polyline',
      name: 'Polyline',
      component: Polyline
    },
    {
      path: '/PolylineDraw',
      name: 'PolylineDraw',
      component: PolylineDraw
    },
    {
      path: '/PointCollection',
      name: 'PointCollection',
      component: PointCollection
    },
    {
      path: '/FlashingStar',
      name: 'FlashingStar',
      component: FlashingStar
    },
    // echarts
    {
      path: '/EchartSimple',
      name: 'EchartSimple',
      component: EchartSimple
    },
  ]
})
